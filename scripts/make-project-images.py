"""Generates the six project illustrations (1280x720). Conceptual artwork, NOT application screenshots.
Run: python3 scripts/make-project-images.py  (needs Pillow). Replace the PNGs with real screenshots anytime."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, random
W, H, K = 1280, 720, 2
C=(34,211,238); B=(59,130,246); V=(139,92,246); G=(52,211,153); R=(248,113,113); Y=(250,204,21); WH=(226,232,240); DIM=(71,85,115)
def base(c2=(14,28,60)):
    im = Image.new("RGBA", (W*K, H*K)); d = ImageDraw.Draw(im)
    for y in range(H*K):
        t = y/(H*K); d.line([(0,y),(W*K,y)], fill=tuple(int((6,10,20)[i]+(c2[i]-(6,10,20)[i])*t) for i in range(3))+(255,))
    for x in range(0, W, 40): d.line([(x*K,0),(x*K,H*K)], fill=(30,41,70,255), width=1)
    for y in range(0, H, 40): d.line([(0,y*K),(W*K,y*K)], fill=(30,41,70,255), width=1)
    return im
def glow(im, x, y, r, col, a=110):
    l = Image.new("RGBA", im.size, (0,0,0,0)); ImageDraw.Draw(l).ellipse([(x-r)*K,(y-r)*K,(x+r)*K,(y+r)*K], fill=col+(a,))
    return Image.alpha_composite(im, l.filter(ImageFilter.GaussianBlur(r*K/2)))
def rr(d,b,r,fill=None,outline=None,w=2): d.rounded_rectangle([v*K for v in b], r*K, fill=fill, outline=outline, width=w*K)
def ln(d,pts,fill,w=3): d.line([v*K for p in pts for v in p], fill=fill, width=w*K, joint="curve")
def el(d,b,fill=None,outline=None,w=2): d.ellipse([v*K for v in b], fill=fill, outline=outline, width=w*K)
def dot(d,x,y,r,fill,outline=None): el(d,[x-r,y-r,x+r,y+r],fill,outline,2)
def poly(d,pts,fill,outline=None): d.polygon([v*K for p in pts for v in p], fill=fill, outline=outline)
def tick(d,x,y,s=1,col=WH): ln(d,[(x-12*s,y),(x-3*s,y+10*s),(x+13*s,y-10*s)],col,5)
def cross(d,x,y,col=WH): ln(d,[(x-12,y-12),(x+12,y+12)],col,5); ln(d,[(x-12,y+12),(x+12,y-12)],col,5)
def font(s):
    try: return ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", s*K)
    except Exception: return ImageFont.load_default()
def save(im, name): im.convert("RGB").resize((W,H), Image.LANCZOS).save(f"public/projects/{name}", optimize=True)
random.seed(7)

# 1 ATS Resume Scorer: document -> five analysis nodes
im = glow(base(), 470, 360, 260, B); im = glow(im, 900, 360, 220, V, 70); d = ImageDraw.Draw(im)
rr(d,[330,100,620,620],20,(18,30,58,255),B,3); rr(d,[365,140,470,165],6,C)
for i in range(10):
    y = 205+i*38; ln(d,[(365,y),(365+(190 if i%3 else 235)-random.randint(0,50),y)], C if i in (2,5,7) else DIM, 8)
cols=[C,B,V,C,B]
for i in range(5):
    y = 140+i*110; ln(d,[(620,360),(780,y)],(59,130,246,255),3); dot(d,820,y,34,(14,28,60,255),cols[i]); tick(d,820,y,.8,cols[i])
dot(d,610,125,34,G); tick(d,610,125)
save(im,"ats.png")

# 2 Loanify: classification scatter + decision outcome
im = glow(base(), 430, 380, 280, B); im = glow(im, 950, 330, 200, V, 80); d = ImageDraw.Draw(im)
ln(d,[(150,610),(150,120)],DIM,3); ln(d,[(150,610),(700,610)],DIM,3)
for _ in range(34):
    x=random.gauss(280,60)+60; y=random.gauss(450,55); dot(d,x,y,9,B+(230,))
for _ in range(34):
    x=random.gauss(520,55); y=random.gauss(280,55); dot(d,x,y,9,V+(230,))
ln(d,[(190,260),(660,560)],C,5)
rr(d,[820,120,1080,190],14,(18,30,58,255),C,3); ln(d,[(950,190),(950,260),(830,330)],DIM,4); ln(d,[(950,260),(1070,330)],DIM,4)
dot(d,830,400,70,(16,80,60,255),G); tick(d,830,400,1.6,G); dot(d,1070,400,70,(90,30,40,255),R); cross(d,1070,400,R)
save(im,"loanify.png")

# 3 Gym Coach: pose landmarks
im = glow(base(), 640, 380, 300, C, 80); d = ImageDraw.Draw(im)
bk=[(340,90),(940,690)]
for (x,y,sx,sy) in [(340,90,1,1),(940,90,-1,1),(340,690,1,-1),(940,690,-1,-1)]:
    ln(d,[(x,y+sy*60),(x,y),(x+sx*60,y)],C,5)
pts={"h":(640,170),"n":(640,225),"ls":(570,255),"rs":(710,255),"le":(520,340),"re":(760,340),"lw":(490,235),"rw":(790,235),"hip":(640,430),"lk":(590,540),"rk":(690,540),"la":(580,650),"ra":(700,650)}
for a,b in [("n","ls"),("n","rs"),("ls","le"),("le","lw"),("rs","re"),("re","rw"),("n","hip"),("hip","lk"),("hip","rk"),("lk","la"),("rk","ra"),("ls","rs")]: ln(d,[pts[a],pts[b]],C,6)
el(d,[602,132,678,208],None,C,6)
for k,(x,y) in pts.items():
    if k!="h": dot(d,x,y,13,WH,B)
d.arc([v*K for v in [700,280,820,400]],-90,60,fill=V,width=8*K)
save(im,"gym-coach.png")

# 4 NeuralArt: content + style -> AdaIN -> stylized
im = glow(base(), 400, 360, 260, V, 90); d = ImageDraw.Draw(im)
rr(d,[90,110,390,330],16,(16,40,90,255),C,3); dot(d,320,175,22,Y); poly(d,[(90,330),(170,200),(240,280),(300,220),(390,330)],(60,80,130,255))
rr(d,[90,390,390,610],16,(30,20,70,255),V,3)
for i,c in enumerate([V,C,B,(236,72,153),Y]): el(d,[240-(i*28)-40+40,500-(i*20)-10,240+(i*28)+40+0,500+(i*20)+30], None, c, 5)
for y in (220,500): ln(d,[(410,y),(520,360)],DIM,4)
rr(d,[520,300,740,420],18,(18,30,58,255),C,3); d.text((630*K,360*K),"AdaIN",font=font(40),fill=WH,anchor="mm")
ln(d,[(740,360),(820,360)],C,5); poly(d,[(820,345),(850,360),(820,375)],C)
rr(d,[860,150,1190,570],18,(24,20,60,255),B,3)
for i,c in enumerate([V,C,B,(236,72,153)]): el(d,[1025-60-i*34,300-40-i*22,1025+60+i*34,300+40+i*22+120],None,c+(255,),4)
poly(d,[(860,570),(960,380),(1040,480),(1110,400),(1190,570)],(20,30,80,235),WH); dot(d,1120,230,26,Y)
save(im,"neuralart.png")

# 5 SnapClass: face recognition + voice biometrics
im = glow(base(), 420, 360, 240, C, 80); im = glow(im, 930, 360, 220, V, 80); d = ImageDraw.Draw(im)
el(d,[330,190,510,440],None,C,5); dot(d,395,300,9,WH); dot(d,445,300,9,WH); ln(d,[(420,320),(412,360),(428,360)],C,4); d.arc([v*K for v in [385,370,455,420]],20,160,fill=C,width=5*K)
for x,y in [(345,260),(495,260),(360,380),(480,380),(420,200),(420,435)]: dot(d,x,y,6,B)
for (x,y,sx,sy) in [(280,150,1,1),(560,150,-1,1),(280,490,1,-1),(560,490,-1,-1)]: ln(d,[(x,y+sy*50),(x,y),(x+sx*50,y)],WH,5)
for i,x in enumerate(range(700,1120,26)):
    h=30+abs(math.sin(i*.55)*150)+random.randint(0,25); t=i/16; col=tuple(int(B[j]+(V[j]-B[j])*t) for j in range(3))
    rr(d,[x,360-h/2,x+14,360+h/2],7,col+(255,))
ln(d,[(580,330),(660,330)],DIM,4); ln(d,[(580,390),(660,390)],DIM,4)
dot(d,640,590,42,G); tick(d,640,590,1.1)
save(im,"snapclass.png")

# 6 Flappy Bird AI: bird, pipes, small Q-network
im = glow(base((8,30,50)), 450, 360, 240, Y, 50); d = ImageDraw.Draw(im)
for x in (760,1040):
    off=0 if x==760 else 70
    rr(d,[x,-10,x+100,270+off],6,(22,163,74,255),(134,239,172,255),3); rr(d,[x-15,240+off,x+115,290+off],6,(34,197,94,255),(134,239,172,255),3)
    rr(d,[x,450+off,x+100,730],6,(22,163,74,255),(134,239,172,255),3); rr(d,[x-15,420+off,x+115,470+off],6,(34,197,94,255),(134,239,172,255),3)
el(d,[370,320,480,400],Y,(180,130,10),3); el(d,[385,355,435,395],(234,179,8),None); dot(d,455,348,12,WH); dot(d,459,348,5,(10,10,10))
poly(d,[(478,362),(512,372),(478,384)],(249,115,22))
ln(d,[(500,350),(640,300),(740,330)],C,4); poly(d,[(740,315),(765,332),(738,345)],C)
L=[[500,570,640],[480,540,600,660],[520,620]]; X=[90,200,310]
for a in range(2):
    for y1 in L[a]:
        for y2 in L[a+1]: ln(d,[(X[a],y1),(X[a+1],y2)],(59,130,246,170),2)
for a in range(3):
    for y in L[a]: dot(d,X[a],y,12,C if a!=1 else V)
save(im,"flappy-bird.png")
