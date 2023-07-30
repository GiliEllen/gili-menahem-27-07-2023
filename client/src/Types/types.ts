import * as Sunny from "../assets/animations/sunny.json";
import * as PartlyCloudy from "../assets/animations/partly cloudy.json";
import * as MostlySunny from "../assets/animations/mostly sunny.json";
import * as Mist from "../assets/animations/mist.json";
import * as CloudyNight from "../assets/animations/cloudy night.json";
import * as Night from "../assets/animations/night.json";
import * as PartlyShower from "../assets/animations/partly shower.json";
import * as RainyNight from "../assets/animations/rainy night.json";
import * as SnowDay from "../assets/animations/snow day.json";
import * as SnowNight from "../assets/animations/snow night.json";
import * as Snow from "../assets/animations/snow.json";
import * as StormAndShowers from "../assets/animations/storm and showers.json";
import * as Storm from "../assets/animations/storm.json";
import * as Thunder from "../assets/animations/thunder.json";
import * as Windy from "../assets/animations/windy.json";



export interface WeatherType {
  LocalObservationDateTime: any;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: any;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  RealFeelTemperature: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
      Phrase: "Hot";
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
      Phrase: "Hot";
    };
  };
  RealFeelTemperatureShade: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
      Phrase: "Hot";
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
      Phrase: "Hot";
    };
  };
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  DewPoint: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  Wind: {
    Direction: {
      Degrees: number;
      Localized: "NW";
      English: "NW";
    };
    Speed: {
      Metric: {
        Value: number;
        Unit: "km/h";
        UnitType: 7;
      };
      Imperial: {
        Value: number;
        Unit: "mi/h";
        UnitType: number;
      };
    };
  };
  WindGust: {
    Speed: {
      Metric: {
        Value: number;
        Unit: "km/h";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "mi/h";
        UnitType: number;
      };
    };
  };
  UVIndex: number;
  UVIndexText: "Very High";
  Visibility: {
    Metric: {
      Value: number;
      Unit: "km";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "mi";
      UnitType: number;
    };
  };
  ObstructionsToVisibility: "";
  CloudCover: number;
  Ceiling: {
    Metric: {
      Value: number;
      Unit: "m";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "ft";
      UnitType: number;
    };
  };
  Pressure: {
    Metric: {
      Value: number;
      Unit: "mb";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "inHg";
      UnitType: number;
    };
  };
  PressureTendency: {
    LocalizedText: "Falling";
    Code: "F";
  };
  Past24HourTemperatureDeparture: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  ApparentTemperature: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  WindChillTemperature: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  WetBulbTemperature: {
    Metric: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "F";
      UnitType: number;
    };
  };
  Precip1hr: {
    Metric: {
      Value: number;
      Unit: "mm";
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: "in";
      UnitType: number;
    };
  };
  PrecipitationSummary: {
    Precipitation: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    PastHour: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past3Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past6Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past9Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past12Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past18Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
    Past24Hours: {
      Metric: {
        Value: number;
        Unit: "mm";
        UnitType: number;
      };
      Imperial: {
        Value: number;
        Unit: "in";
        UnitType: number;
      };
    };
  };
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
      Maximum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
    };
    Past12HourRange: {
      Minimum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
      Maximum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
    };
    Past24HourRange: {
      Minimum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
      Maximum: {
        Metric: {
          Value: number;
          Unit: "C";
          UnitType: number;
        };
        Imperial: {
          Value: number;
          Unit: "F";
          UnitType: number;
        };
      };
    };
  };
  MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us";
  Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us";
}

export interface LocationType {
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
  };
  Key: string;
  LocalizedName: string;
  Rank: number;
  Type: string;
  Version: number;
}

export const weatherIcons = [
  {
    iconNumber: 1,
    icon: Sunny,
    day: true,
    night: false,
    text: "Sunny",
  },
  {
    iconNumber: 2,
    icon: MostlySunny,
    day: true,
    night: false,
    text: "Mostly Sunny",
  },
  {
    iconNumber: 3,
    icon: PartlyCloudy,
    day: true,
    night: false,
    text: "Partly Sunny",
  },
  {
    iconNumber: 4,
    icon: PartlyCloudy,
    day: true,
    night: false,
    text: "Intermittent Clouds",
  },
  {
    iconNumber: 5,
    icon: Mist,
    day: true,
    night: false,
    text: "Hazy Sunshine",
  },
  {
    iconNumber: 6,
    icon: Windy,
    day: true,
    night: false,
    text: "Mostly Cloudy",
  },
  {
    iconNumber: 7,
    icon: Windy,
    day: true,
    night: false,
    text: "Cloudy",
  },
  {
    iconNumber: 8,
    icon: Windy,
    day: true,
    night: false,
    text: "Dreary (Overcast)",
  },
];
