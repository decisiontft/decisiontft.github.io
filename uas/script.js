function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./frame0.jpg
./frame1.jpg
./frame2.jpg
./frame3.jpg
./frame4.jpg
./frame5.jpg
./frame6.jpg
./frame7.jpg
./frame8.jpg
./frame9.jpg
./frame10.jpg
./frame11.jpg
./frame12.jpg
./frame13.jpg
./frame14.jpg
./frame15.jpg
./frame16.jpg
./frame17.jpg
./frame18.jpg
./frame19.jpg
./frame20.jpg
./frame21.jpg
./frame22.jpg
./frame23.jpg
./frame24.jpg
./frame25.jpg
./frame26.jpg
./frame27.jpg
./frame28.jpg
./frame29.jpg
./frame30.jpg
./frame31.jpg
./frame32.jpg
./frame33.jpg
./frame34.jpg
./frame35.jpg
./frame36.jpg
./frame37.jpg
./frame38.jpg
./frame39.jpg
./frame40.jpg
./frame41.jpg
./frame42.jpg
./frame43.jpg
./frame44.jpg
./frame45.jpg
./frame46.jpg
./frame47.jpg
./frame48.jpg
./frame49.jpg
./frame50.jpg
./frame51.jpg
./frame52.jpg
./frame53.jpg
./frame54.jpg
./frame55.jpg
./frame56.jpg
./frame57.jpg
./frame58.jpg
./frame59.jpg
./frame60.jpg
./frame61.jpg
./frame62.jpg
./frame63.jpg
./frame64.jpg
./frame65.jpg
./frame66.jpg
./frame67.jpg
./frame68.jpg
./frame69.jpg
./frame70.jpg
./frame71.jpg
./frame72.jpg
./frame73.jpg
./frame74.jpg
./frame75.jpg
./frame76.jpg
./frame77.jpg
./frame78.jpg
./frame79.jpg
./frame80.jpg
./frame81.jpg
./frame82.jpg
./frame83.jpg
./frame84.jpg
./frame85.jpg
./frame86.jpg
./frame87.jpg
./frame88.jpg
./frame89.jpg
./frame90.jpg
./frame91.jpg
./frame92.jpg
./frame93.jpg
./frame94.jpg
./frame95.jpg
./frame96.jpg
./frame97.jpg
./frame98.jpg
./frame99.jpg
./frame100.jpg
./frame101.jpg
./frame102.jpg
./frame103.jpg
./frame104.jpg
./frame105.jpg
./frame106.jpg
./frame107.jpg
./frame108.jpg
./frame109.jpg
./frame110.jpg
./frame111.jpg
./frame112.jpg
./frame113.jpg
./frame114.jpg
./frame115.jpg
./frame116.jpg
./frame117.jpg
./frame118.jpg
./frame119.jpg
./frame120.jpg
./frame121.jpg
./frame122.jpg
./frame123.jpg
./frame124.jpg
./frame125.jpg
./frame126.jpg
./frame127.jpg
./frame128.jpg
./frame129.jpg
./frame130.jpg
./frame131.jpg
./frame132.jpg
./frame133.jpg
./frame134.jpg
./frame135.jpg
./frame136.jpg
./frame137.jpg
./frame138.jpg
./frame139.jpg
./frame140.jpg
./frame141.jpg
./frame142.jpg
./frame143.jpg
./frame144.jpg
./frame145.jpg
./frame146.jpg
./frame147.jpg
./frame148.jpg
./frame149.jpg
./frame150.jpg
./frame151.jpg
./frame152.jpg
./frame153.jpg
./frame154.jpg
./frame155.jpg
./frame156.jpg
./frame157.jpg
./frame158.jpg
./frame159.jpg
./frame160.jpg
./frame161.jpg
./frame162.jpg
./frame163.jpg
./frame164.jpg
./frame165.jpg
./frame166.jpg
./frame167.jpg
./frame168.jpg
./frame169.jpg
./frame170.jpg
./frame171.jpg
./frame172.jpg
./frame173.jpg
./frame174.jpg
./frame175.jpg
./frame176.jpg
./frame177.jpg
./frame178.jpg
./frame179.jpg
./frame180.jpg
./frame181.jpg
./frame182.jpg
./frame183.jpg
./frame184.jpg
./frame185.jpg
./frame186.jpg
./frame187.jpg
./frame188.jpg
./frame189.jpg
./frame190.jpg
./frame191.jpg
./frame192.jpg
./frame193.jpg
./frame194.jpg
./frame195.jpg
./frame196.jpg
./frame197.jpg
./frame198.jpg
./frame199.jpg
./frame200.jpg
./frame201.jpg
./frame202.jpg
./frame203.jpg
./frame204.jpg
./frame205.jpg
./frame206.jpg
./frame207.jpg
./frame208.jpg
./frame209.jpg
./frame210.jpg
./frame211.jpg
./frame212.jpg
./frame213.jpg
./frame214.jpg
./frame215.jpg
./frame216.jpg
./frame217.jpg
./frame218.jpg
./frame219.jpg
./frame220.jpg
./frame221.jpg
./frame222.jpg
./frame223.jpg
./frame224.jpg
./frame225.jpg
./frame226.jpg
./frame227.jpg
./frame228.jpg
./frame229.jpg
./frame230.jpg
./frame231.jpg
./frame232.jpg
./frame233.jpg
./frame234.jpg
./frame235.jpg
./frame236.jpg
./frame237.jpg
./frame238.jpg
./frame239.jpg
./frame240.jpg
./frame241.jpg
./frame242.jpg
./frame243.jpg
./frame244.jpg
./frame245.jpg
./frame246.jpg
./frame247.jpg
./frame248.jpg
./frame249.jpg
./frame250.jpg
./frame251.jpg
./frame252.jpg
./frame253.jpg
./frame254.jpg
./frame255.jpg
./frame256.jpg
./frame257.jpg
./frame258.jpg
./frame259.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})