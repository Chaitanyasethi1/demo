import sys
try:
    from PIL import Image, ImageDraw
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "--break-system-packages"])
    from PIL import Image, ImageDraw

def make_circle(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    size = min(img.size)
    
    # Calculate crop coordinates to center the image
    left = (img.size[0] - size) // 2
    top = (img.size[1] - size) // 2
    right = (img.size[0] + size) // 2
    bottom = (img.size[1] + size) // 2
    img = img.crop((left, top, right, bottom))
    
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + img.size, fill=255)
    
    output = Image.new('RGBA', img.size, (0, 0, 0, 0))
    output.paste(img, (0, 0), mask)
    
    # Resize for favicon
    output = output.resize((128, 128), Image.Resampling.LANCZOS)
    output.save(out_path, format="PNG")

make_circle(sys.argv[1], sys.argv[2])
