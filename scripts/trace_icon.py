import cv2
import numpy as np

im = cv2.imread('public/assets/modolar-icon-navy.png', cv2.IMREAD_UNCHANGED)
alpha = im[:, :, 3]
_, thresh = cv2.threshold(alpha, 127, 255, cv2.THRESH_BINARY)
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

svg_paths = []
h, w = thresh.shape
for i, c in enumerate(contours):
    epsilon = 0.002 * cv2.arcLength(c, True)
    approx = cv2.approxPolyDP(c, epsilon, True)
    points = approx.reshape(-1, 2)
    path_d = 'M ' + ' L '.join([f'{p[0]},{p[1]}' for p in points]) + ' Z'
    svg_paths.append(path_d)

combined_d = ' '.join(svg_paths)
svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="currentColor">
  <path fill-rule="evenodd" d="{combined_d}" />
</svg>
'''

with open('public/assets/modolar-icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('modolar-icon.svg generated successfully!')
