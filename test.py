#HEAVILY INSPIRED BY BWsix
#original: https://gist.github.com/BWsix/8900acd3e739417c581229a9dd9479a3

import cv2 as cv
import time

path = "bad-apple.mp4"
width, height = 480, 360

outWidth,outHeight = 160,120

cap = cv.VideoCapture(path)
frames = int(cap.get(cv.CAP_PROP_FRAME_COUNT))

blackPixelIdentifier, whitePixelIdentifier = "#"," "
threshold = 127

outPath = "nightmareFuel.txt"
outFile = open(outPath, "x")

print(f"Processing video \"{path}\" ({width}*{height} * {frames}) to {outWidth}*{outHeight} at \"{outPath}\"")
print(f"Encoding to B/W with settings: ")
print(f"  0..{threshold} -> \"{blackPixelIdentifier}\" (black)")
print(f"  {threshold+1}..255 -> \"{whitePixelIdentifier}\" (white)\n")

processedFrameArray = []

progDialogInterval = 1
lastProgDialog = time.time()

for cnt in range(frames):
    _,frame = cap.read()
    frame = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
    frame = cv.resize(frame, (outWidth, outHeight))

    img = []

    for row in frame:
        newRow = ""
        for col in row:
            if col <= threshold:
                newRow += blackPixelIdentifier
            else:
                newRow += whitePixelIdentifier

        img.append(newRow)

    processedFrameArray.append(img)

    currentTime = time.time()
    if (currentTime - lastProgDialog) >= progDialogInterval or cnt == frames - 1:
        print(f"Processed frame {cnt+1}/{frames} ({int(100*((cnt+1)/frames))}%)")
        lastProgDialog = currentTime



outFile.write(str(processedFrameArray))
outFile.close()
print(f"Wrote array to \"{outPath}\" ({outWidth}*{outHeight})")
input("Finished, press ENTER to exit. ")