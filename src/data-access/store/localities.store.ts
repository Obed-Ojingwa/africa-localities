import {LocalitiesInterface} from "../models/localities.model"

export const localitiesStore: LocalitiesInterface[] = [
  {
    name: "nigeria",
    zipCode: "",
    latitude: 9.082,
    longitude: 8.6753,
    isCountry: true,
    isState: false,
    isCity: false,
    alias: [],
    children: [
      {
        name: "lagos",
        zipCode: "",
        latitude: 6.5244,
        longitude: 3.3792,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
      {
        name: "abuja",
        zipCode: "",
        latitude: 9.0579,
        longitude: 7.4951,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [
          {
            name: "gwarinpa",
            zipCode: "900108",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "wuse",
            zipCode: "900288",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "asokoro",
            zipCode: "900231",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "karu",
            zipCode: "900101",
            latitude: 8.9928,
            longitude: 7.5725,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "nyanya",
            zipCode: "900103",
            latitude: 9.0561,
            longitude: 7.5789,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "katampe",
            zipCode: "900108",
            latitude: 9.0984,
            longitude: 7.4716,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "gwagwalada",
            zipCode: "900108",
            latitude: 8.9508,
            longitude: 7.0767,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
        ],
        alias: [],
      },
      {
        name: "kano",
        zipCode: "",
        latitude: 12.0022,
        longitude: 8.592,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
      {
        name: "anambra",
        zipCode: "",
        latitude: 6.2209,
        longitude: 6.937,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
    ],
  },
];
