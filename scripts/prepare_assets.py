import os
import shutil
from PIL import Image
import numpy as np

# Ensure directories exist
dirs = [
    'public/assets/logo',
    'public/assets/packages',
    'public/assets/services',
    'public/assets/about',
    'public/assets/clients',
    'public/assets/hero',
    'public/assets/cta',
    'public/assets/portfolio'
]
for d in dirs:
    os.makedirs(d, exist_ok=True)

print("1. Processing Logo...")
# Logo
logo_src = r'logo out zone/لوجو.png'
if os.path.exists(logo_src):
    img = Image.open(logo_src)
    # Bounding box of content (alpha > 20)
    alpha = np.array(img.split()[-1])
    y_idx, x_idx = np.where(alpha > 20)
    pad = 16
    min_x = max(0, x_idx.min() - pad)
    max_x = min(img.width, x_idx.max() + pad)
    min_y = max(0, y_idx.min() - pad)
    max_y = min(img.height, y_idx.max() + pad)
    cropped_logo = img.crop((min_x, min_y, max_x, max_y))
    cropped_logo.save('public/assets/logo/logo-outzone.png', 'PNG')
    print("Saved logo-outzone.png:", cropped_logo.size)

    # Icon only (the O and bursting frame on the left)
    # in original coordinates: x: 369 to 800, y: 227 to 580
    icon_crop = img.crop((369, 227, 800, 580))
    icon_crop.save('public/assets/logo/icon-outzone.png', 'PNG')
    print("Saved icon-outzone.png:", icon_crop.size)

print("2. Copying Posters...")
# Packages
shutil.copyfile(r'باقات خاصة بنا/Neon Arabic Marketing Packages Poster.png', 'public/assets/packages/packages-all.png')
shutil.copyfile(r'باقات خاصة بنا/Out Zone Basic Package Poster.png', 'public/assets/packages/package-basic.png')
shutil.copyfile(r'باقات خاصة بنا/Neon Digital Marketing Package Poster.png', 'public/assets/packages/package-medium.png')
shutil.copyfile(r'باقات خاصة بنا/الباقة الاحترافية للنمو الرقمي.png', 'public/assets/packages/package-pro.png')

# Services
shutil.copyfile(r'our service/Beyond Limits_ Digital Growth Services.png', 'public/assets/services/services-poster.png')

# About
shutil.copyfile(r'about us/OUT ZONE_ Beyond Limits.png', 'public/assets/about/about-poster.png')
print("Posters copied.")

print("3. Processing Client Logos for Dark Mode...")
def make_white_transparent(src_path, dest_path, threshold=235):
    img = Image.open(src_path).convert('RGBA')
    arr = np.array(img)
    # where r, g, b > threshold
    white_mask = (arr[:, :, 0] >= threshold) & (arr[:, :, 1] >= threshold) & (arr[:, :, 2] >= threshold)
    arr[white_mask, 3] = 0
    # Also smooth edges
    edge_mask = (arr[:, :, 0] >= threshold - 30) & (arr[:, :, 1] >= threshold - 30) & (arr[:, :, 2] >= threshold - 30) & (~white_mask)
    if np.any(edge_mask):
        diff = 255 - np.mean(arr[edge_mask, :3], axis=1)
        arr[edge_mask, 3] = np.clip(diff * 4, 0, 255).astype(np.uint8)
    res = Image.fromarray(arr)
    # crop transparent borders
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(dest_path, 'PNG')
    print(f"Saved {dest_path}: {res.size}")

# bunhood: is white on black!
bunhood_src = r'logos clint/ChatGPT Image Sep 8, 2026, 09_50_09 AM.png'
if os.path.exists(bunhood_src):
    img = Image.open(bunhood_src).convert('RGBA')
    arr = np.array(img)
    # black background: r,g,b < 40
    black_mask = (arr[:, :, 0] < 40) & (arr[:, :, 1] < 40) & (arr[:, :, 2] < 40)
    arr[black_mask, 3] = 0
    res = Image.fromarray(arr)
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save('public/assets/clients/client-bunhood.png', 'PNG')
    print("Saved client-bunhood.png:", res.size)

# LUCIN: burgundy text on white
make_white_transparent(r'logos clint/ChatGPT Image Sep 6, 2026, 11_51_24 PM.png', 'public/assets/clients/client-lucin.png')

# ALKINDI
make_white_transparent(r'logos clint/ChatGPT Image Aug 5, 2026, 03_28_04 AM.png', 'public/assets/clients/client-alkindi.png')

# Fanar dental
make_white_transparent(r'logos clint/الفنار.jpeg', 'public/assets/clients/client-fanar.png', threshold=210)

# Athar
make_white_transparent(r'logos clint/ChatGPT Image Sep 14, 2026, 12_07_45 PM.png', 'public/assets/clients/client-athar.png')

# MICROS
shutil.copyfile(r'logos clint/ChatGPT Image Aug 9, 2026, 06_37_44 AM.png', 'public/assets/clients/client-micros.png')

# Kemet
make_white_transparent(r'logos clint/kemet system.jpeg', 'public/assets/clients/client-kemet.png', threshold=245)

# Nada
make_white_transparent(r'logos clint/لوجو الوان.png', 'public/assets/clients/client-nada.png')

print("4. Extracting Visual Highlights from Reference Image...")
ref_path = r'C:\Users\Abo Hany ^_^\.gemini\antigravity\brain\d9c9ac1a-3a2a-4816-a7d3-b965c8969dd0\.user_uploaded\media_1792863292405_a3145529.png'
if os.path.exists(ref_path):
    ref = Image.open(ref_path)
    rw, rh = ref.size
    
    # Hero visual (laptop + 3D icons + Kuwait towers dusk skyline):
    # Right half of hero from y: 30 to y: 232, x: 180 to 418
    hero_vis = ref.crop((int(rw * 0.44), int(rh * 0.038), rw, int(rh * 0.232)))
    hero_vis.save('public/assets/hero/hero-visual.png', 'PNG')
    print("Saved hero-visual.png:", hero_vis.size)

    # Hero full backdrop
    hero_bg = ref.crop((0, int(rh * 0.02), rw, int(rh * 0.235)))
    hero_bg.save('public/assets/hero/hero-scene.png', 'PNG')
    print("Saved hero-scene.png:", hero_bg.size)

    # Kuwait CTA Banner (Kuwait towers + flag + skyline):
    cta_banner = ref.crop((12, int(rh * 0.816), rw - 12, int(rh * 0.892)))
    cta_banner.save('public/assets/cta/cta-kuwait.png', 'PNG')
    print("Saved cta-kuwait.png:", cta_banner.size)

    # 5 Portfolio cards:
    # Portfolio row is between y: 686 and 748 approx
    py1 = int(rh * 0.686)
    py2 = int(rh * 0.748)
    card_w = (rw - 30) / 5
    portfolio_names = [
        'portfolio-restaurant.png',
        'portfolio-cosmetics.png',
        'portfolio-fitness.png',
        'portfolio-fashion.png',
        'portfolio-realestate.png'
    ]
    for i, name in enumerate(portfolio_names):
        x1 = int(15 + i * card_w)
        x2 = int(15 + (i + 1) * card_w)
        card = ref.crop((x1, py1, x2, py2))
        card.save(f'public/assets/portfolio/{name}', 'PNG')
        print(f"Saved {name}: {card.size}")

print("Assets preparation completed successfully!")
