import { useRef, useState } from "react";
import WebFont from 'webfontloader';
import Description from "./Description";
import { useParams } from "react-router-dom";
import NameCoinIds from "./2011Domain.json";
import { Flex } from '@chakra-ui/react'
import moment from "moment";
import useFontFaceObserver from "use-font-face-observer";
const bgImage = require('./namecoin_baselayer.png');


const tr46 = require("tr46");
const SCALE = 1;



const EVAssets = () => {
  const canvasEl = useRef(null);
  const imgEl = useRef(null);
  const [title, setTitle] = useState("");
  const [unicode, setUnicode] = useState("");
  const { prefix, nameCoinId } = useParams();

  const nmcAsset = nameCoinId + ".bit"//prefix.concat("/" + nameCoinId);
  console.log(nmcAsset)
  const nameCoinDescription = NameCoinIds.find(({ bitDomain }) => bitDomain === nmcAsset);
  console.log("HERE")
  console.log(nameCoinDescription);
  // const { blockFirstNew, blockTimeFirstNew } = nameCoinDescription;
  // const monthFormatted = Month < 10 ? `0${Month}` : Month;
  // const dayFormatted = Day < 10 ? `0${Day}` : Day;
  //const date = blockTimeFirstNew;//`${Year}-${monthFormatted}-${dayFormatted}`;
  //const date = Date.parse(blockTimeFirstNew, "MM/dd/yyyy HH:mm a");
  // const date = moment.utc(blockTimeFirstNew);

  //const registrationImage = format(date, "yyyy-MM-dd");
  // const registrationImage = date.format('dddd,  MMMM Do,  YYYY,  h:mm  a') + "  (UTC)";
  // const registrationTitle = date.format('YYYY-MM');//format(date, "yyyy-MM");
  // const registrationDescription = date.format("MMM Do, YYYY");

  const calculateFontSize = (text) => {
    if (text.length < 10) {
      return "80px"
    } else if (text.length < 15) {
      return "70px"
    } else if (text.length < 20) {
      return "60px"
    } else if (text.length < 25) {
      return "50px"
    } else if (text.length < 30) {
      return "40px"
    } else if (text.length < 35) {
      return "35px"
    } else if (text.length < 40) {
      return "30px"
    } else if (text.length < 50) {
      return "25px"
    }
    //return "20px"


  }
  //   const splitter = new Graphemer();

  //   const graphemeCount = splitter.countGraphemes(unicode);
  //   switch (Category) {
  //     case "Emoji":
  //       let size = "200px";
  //       if (graphemeCount >= 11) {
  //         size = "45px"
  //       }
  //       return size;
  //     case "Text":
  //       if (["xn--clchc0ea0b2g2a9gcd", "xn--xkc2al3hye2a",
  //         "xn--xkc2dl3a5ee0h", "xn--smrgsbord-82a8p",
  //         "xn--8-7sbabhcv6b1cfn"].includes(punycode)) {
  //         return "100px";
  //       } else if (["xn--cckbak0byl6e", "xn--n8juczb8ml64m5r6a",
  //         "xn--h9jeami8py253a", "xn--fiq4mp3eqscr2bfxgex2c",
  //         "xn--80ahnahceodec3ba", "xn--fiqq24b8jea300hll5d",
  //         "xn--eckfz3byc3fk"].includes(punycode)) {
  //         return "90px";
  //       } else if (graphemeCount >= 10) {
  //         return "70px";
  //       }
  //       return "110px";
  //     case "ASCII Art":
  //       if (graphemeCount > 6) {
  //         if (graphemeCount >= 11) {
  //           return "70px";
  //         }
  //         return "80px";
  //       }
  //       return "100px";
  //     case "Symbol":
  //       return "180px";
  //     default:
  //       return "150px";
  //   }
  // }

  WebFont.load({
    custom: {
      families: ['MontserratExtraBold'],
    },
  });

  const isFontListLoaded = useFontFaceObserver([
    { family: `MontserratExtraBold` },
  ]);

  const onLoad = () => {
    // const punycode = nmcAsset.substring(nmcAsset.indexOf("/") + 1, nmcAsset.length);
    // const convertedPunycode = tr46.toUnicode(punycode).domain;
    console.log(nmcAsset);

    const fontSize = calculateFontSize(nmcAsset);
    console.log(fontSize);
    // setUnicode(convertedPunycode);

    //Get Fonts
    const canvas = canvasEl.current;
    const imgWidth = imgEl.current.width;
    const imgHeight = imgEl.current.height;

    canvas.width = imgWidth;
    canvas.height = imgHeight;
    const ctx = canvas.getContext("2d");
    ctx.scale(SCALE, SCALE);


    // ctx.drawImage(imgEl.current, imgWidth * (1 - SCALE), imgHeight * (1 - SCALE));

    function whenFontIsLoaded(callback, attemptCount) {
      console.log("Loading Font: " + isFontListLoaded)

      if (attemptCount === undefined) {
        attemptCount = 0;
      }

      if (isFontListLoaded) {
        callback();
        return;
      } else {
        setTimeout(function () {
          whenFontIsLoaded(callback, attemptCount + 1);
        }, 500);
      }
    }

    // whenFontIsLoaded(function () {
    //   console.log("Font 1 Loaded");
    //   ctx.font = `${fontSize} SaturdaySansBold`

    //   isFontLoaded = false;
    //   TEXT_TEXT = 'Some test text;';
    //   initialMeasure = ctx.measureText(TEXT_TEXT);
    //   initialWidth = initialMeasure.width;


    //   whenFontIsLoaded(function () {
    //     console.log("Font 2 Loaded");
    //     ctx.drawImage(imgEl.current, imgWidth * (1 - SCALE), imgHeight * (1 - SCALE));

    //     ctx.font = `${fontSize} DiodrumSemibold`
    //     ctx.textAlign = "center";
    //     ctx.fillStyle = "white";
    //     ctx.textBaseline = "middle";
    //     ctx.fillText(nmcAsset, imgWidth * (1 - SCALE + 1 / 2), imgHeight * (1 - SCALE + 1 / 2) - 20);
    //     // ctx.fillText(nmcAsset + "\n", imgWidth * (1 - SCALE + 1 / 2), imgHeight * (1 - SCALE + 1 / 2));

    //     ctx.font = `25px SaturdaySansBold`
    //     ctx.textAlign = "middle";
    //     ctx.fillText(`TRANSACTION (block ${blockFirstNew})`, imgWidth * (1 - SCALE + 1 / 2), imgHeight * (2 - SCALE) - 35);
    //     ctx.font = "31px SaturdaySansBold";
    //     ctx.fillText(`${registrationImage}`, imgWidth * (1 - SCALE + 1 / 2), imgHeight * (2 - SCALE) - 80);
    //   })
    // });

    const position = nameCoinDescription.firstTransactionDate.indexOf(",", nameCoinDescription.firstTransactionDate.indexOf(",") + 1);
    const dateText = nameCoinDescription.firstTransactionDate.substring(0, position);
    const timeText = nameCoinDescription.firstTransactionDate.substring(position + 1, nameCoinDescription.firstTransactionDate.length)

    whenFontIsLoaded(function () {
      ctx.drawImage(imgEl.current, imgWidth * (1 - SCALE), imgHeight * (1 - SCALE));


      //Ranking
      ctx.font = `50px MontserratExtraBold`
      ctx.textAlign = "center";
      ctx.fillStyle = "rgb(52, 106, 153)";
      // ctx.fillStyle = "white";

      const hashWidth = ctx.measureText("#").width;
      const textWidth = ctx.measureText(nameCoinDescription.RegistrationOrder.replace(/\s/g, '')).width;

      ctx.fillText("#", imgWidth * (1 - SCALE + 1 / 2) - textWidth / 2, 120)
      ctx.fillStyle = "white";
      ctx.fillText(nameCoinDescription.RegistrationOrder.replace(/\s/g, ''), imgWidth * (1 - SCALE + 1 / 2) + hashWidth / 2, 120)






      ctx.font = `${fontSize} MontserratExtraBold`
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.textBaseline = "middle";
      const bitWidth = ctx.measureText(".bit").width
      const nameWidth = ctx.measureText(nmcAsset.substring(nmcAsset.length - 4, "end")).width;


      //Main .bit Name
      ctx.fillText(nmcAsset.substring(nmcAsset.length - 4, "end"), imgWidth * (1 - SCALE + 1 / 2) - bitWidth / 2, imgHeight * (1 - SCALE + 1 / 2) - 20);
      //244, 178, 62
      ctx.fillStyle = 'rgb(244,177,62)';
      ctx.fillText(".bit", imgWidth * (1 - SCALE + 1 / 2) + nameWidth / 2, imgHeight * (1 - SCALE + 1 / 2) - 20);
      //244, 178, 62)

      // ctx.fillText(nmcAsset + "\n", imgWidth * (1 - SCALE + 1 / 2), imgHeight * (1 - SCALE + 1 / 2));







      ctx.font = `45px MontserratExtraBold`
      ctx.fillStyle = "white";
      ctx.textAlign = "middle";
      ctx.fillText(dateText, imgWidth * (1 - SCALE + 1 / 2), 595);
      // ctx.font = "31px SaturdaySansBold";
      // ctx.fillText(`${registrationImage}`, imgWidth * (1 - SCALE + 1 / 2), imgHeight * (2 - SCALE) - 80);

      ctx.font = `35px MontserratExtraBold`
      ctx.fillText(timeText + " UTC", imgWidth * (1 - SCALE + 1 / 2), 635);

    })



    //setTitle(`${convertedPunycode} | ${registrationTitle} | Punycodes | ${nmcAsset}`);
    setTitle(`${nmcAsset} | ${dateText} | Namecoin Domain (d/ asset) |`);
  };



  return (
    <>
      <Flex direction={{ base: "column", xl: "row" }}>
        <canvas ref={canvasEl} style={{ marginLeft: "8vh", marginTop: "8vh" }}></canvas>
        <Description
          title={title}
          punycode={unicode}
          nmcAsset={nmcAsset}
          registration={"TEST"}
          onLoad={onLoad}
        />
      </Flex>
      <div style={{ display: "none" }}>
        <img
          src={bgImage}
          ref={imgEl}
          alt="nmcframe"
          onLoad={onLoad}
        />
      </div>
    </>
  );
}

export default EVAssets;