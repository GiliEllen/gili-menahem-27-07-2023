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
  