const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "StopTrippin's NFT FARM Genesis One is an Official ERC-1155 Smart contract On the Polygon Blockchain. Every Animal Holder Gets Access to our Play 2 Earn Game Metaverse and Systems.";
const baseImageUri = "https://ipfs.io/ipfs/QmY5XwZFnJM9tSFbHYYzWxVoJPidxYcRcMcBVyRgYKRooA";
const startEditionFrom = 1;
const endEditionAt = 200;
const editionSize = 200;
const raceWeights = [
  {
    value: "animal",
    from: 1,
    to: editionSize,
  },
];

const races = {
  animal: {
    name: "animal",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/LightBlue.png`,
            weight: 10,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 5,
          },
          {
            id: 2,
            name: "Blue foil",
            path: `${dir}/1-background/blue_f.png`,
            weight: 1,
          },
          {
            id: 3,
            name: "Blue",
            path: `${dir}/1-background/blue.png`,
            weight: 2,
          },
          {
            id: 4,
            name: "Dark Green zombie",
            path: `${dir}/1-background/dgreen_z.png`,
            weight: 3,
          },
          {
            id: 5,
            name: "Fudge",
            path: `${dir}/1-background/Fudge.png`,
            weight: 4,
          },
          {
            id: 6,
            name: "Green",
            path: `${dir}/1-background/ggreen.png`,
            weight: 7,
          },
          {
            id: 7,
            name: "Gold",
            path: `${dir}/1-background/gold.png`,
            weight: 8,
          },
          {
            id: 8,
            name: "Grey",
            path: `${dir}/1-background/grey.png`,
            weight: 11,
          },
          {
            id: 9,
            name: "Honey",
            path: `${dir}/1-background/honey.png`,
            weight: 13,
          },
          {
            id: 10,
            name: "Light Green",
            path: `${dir}/1-background/lgreen.png`,
            weight: 15,
          },
          {
            id: 11,
            name: "Light Purple",
            path: `${dir}/1-background/lpurple.png`,
            weight: 16,
          },
          {
            id: 12,
            name: "Purple zombie",
            path: `${dir}/1-background/purple_z.png`,
            weight: 17,
          },
          {
            id: 13,
            name: "Red",
            path: `${dir}/1-background/red.png`,
            weight: 19,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "1",
            path: `${dir}/2-suit/1.png`,
            weight: 75,
          },
          {
            id: 1,
            name: "2",
            path: `${dir}/2-suit/2.png`,
            weight: 4,
          },
          {
            id: 2,
            name: "3",
            path: `${dir}/2-suit/3.png`,
            weight: 5,
          },
          {
            id: 3,
            name: "31",
            path: `${dir}/2-suit/31.png`,
            weight: 30,
          },
          {
            id: 4,
            name: "30",
            path: `${dir}/2-suit/30.png`,
            weight: 29,
          },
          {
            id: 5,
            name: "4",
            path: `${dir}/2-suit/4.png`,
            weight: 6,
          },
          {
            id: 6,
            name: "5",
            path: `${dir}/2-suit/5.png`,
            weight: 7,
          },
          {
            id: 7,
            name: "6",
            path: `${dir}/2-suit/6.png`,
            weight: 7,
          },
          {
            id: 8,
            name: "9",
            path: `${dir}/2-suit/9.png`,
            weight: 8,
          },
          {
            id: 9,
            name: "10",
            path: `${dir}/2-suit/10.png`,
            weight: 9,
          },
          {
            id: 10,
            name: "11",
            path: `${dir}/2-suit/11.png`,
            weight: 10,
          },
          {
            id: 11,
            name: "12",
            path: `${dir}/2-suit/12.png`,
            weight: 11,
          },
          {
            id: 12,
            name: "13",
            path: `${dir}/2-suit/13.png`,
            weight: 12,
          },
          {
            id: 13,
            name: "14",
            path: `${dir}/2-suit/14.png`,
            weight: 13,
          },
          {
            id: 14,
            name: "15",
            path: `${dir}/2-suit/15.png`,
            weight: 14,
          },
          {
            id: 15,
            name: "16",
            path: `${dir}/2-suit/16.png`,
            weight: 15,
          },
          {
            id: 16,
            name: "17",
            path: `${dir}/2-suit/17.png`,
            weight: 16,
          },
          {
            id: 17,
            name: "18",
            path: `${dir}/2-suit/18.png`,
            weight: 17,
          },
          {
            id: 18,
            name: "19",
            path: `${dir}/2-suit/19.png`,
            weight: 18,
          },
          {
            id: 19,
            name: "20",
            path: `${dir}/2-suit/20.png`,
            weight: 19,
          },
          {
            id: 20,
            name: "21",
            path: `${dir}/2-suit/21.png`,
            weight: 20,
          },
          {
            id: 21,
            name: "22",
            path: `${dir}/2-suit/22.png`,
            weight: 21,
          },
          {
            id: 22,
            name: "23",
            path: `${dir}/2-suit/23.png`,
            weight: 22,
          },
          {
            id: 23,
            name: "24",
            path: `${dir}/2-suit/24.png`,
            weight: 23,
          },
          {
            id: 24,
            name: "25",
            path: `${dir}/2-suit/25.png`,
            weight: 24,
          },
          {
            id: 25,
            name: "26",
            path: `${dir}/2-suit/26.png`,
            weight: 25,
          },
          {
            id: 26,
            name: "27",
            path: `${dir}/2-suit/27.png`,
            weight: 26,
          },
          {
            id: 27,
            name: "28",
            path: `${dir}/2-suit/28.png`,
            weight: 27,
          },
          {
            id: 28,
            name: "29",
            path: `${dir}/2-suit/29.png`,
            weight: 28,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shoulder",
        elements: [
           {
            id: 0,
            name: "StopTrippin Flag",
            path: `${dir}/3-shoulder/stopflag.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Shiny",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 15,
          },
          {
            id: 1,
            name: "Swirly",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 55,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Winner",
            path: `${dir}/5-skin/Skull.png`,
            weight: 5,
          },
          {
            id: 1,
            name: "Empty Layer",
            path: `${dir}/5-skin/Sku.png`,
            weight: 7,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/6-facial-hair/NoFacialHair.png`,
            weight: 19,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/7-mask/NoMask.png`,
            weight: 80,
          },
          {
            id: 1,
            name: "Mustask",
            path: `${dir}/7-mask/mask.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Purple diamond",
            path: `${dir}/8-hair/BlondeBun.png`,
            weight: 14,
          },
          {
            id: 1,
            name: "Blue moon",
            path: `${dir}/8-hair/Pink.png`,
            weight: 20,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "Glass dome",
            path: `${dir}/10-headwear/GlassDome.png`,
            weight: 1,
          },
          {
            id: 1,
            name: "No HeadWear",
            path: `${dir}/10-headwear/NoHeadwear.png`,
            weight: 80,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
