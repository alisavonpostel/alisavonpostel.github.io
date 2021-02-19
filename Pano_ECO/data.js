var APP_DATA = {
  "scenes": [
    {
      "id": "0-vogelperspektive",
      "name": "Vogelperspektive",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02465711497403511,
        "pitch": 0.5303989664846629,
        "fov": 1.610976895625884
      },
      "linkHotspots": [
        {
          "yaw": -0.307471464106051,
          "pitch": 1.1559210165180431,
          "rotation": 0,
          "target": "1-straenansicht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-straenansicht",
      "name": "Straßenansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3402688250760093,
        "pitch": 0.04475203210240508,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3922020831872306,
          "pitch": -0.0785598084029715,
          "rotation": 0,
          "target": "2-atrium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1445701743846204,
        "pitch": -0.04027682889222106,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7733924818046898,
          "pitch": -0.35226251177984125,
          "rotation": 0,
          "target": "3-rampe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rampe",
      "name": "Rampe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.7295424758287901,
        "pitch": 0.049714221396023106,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5895262238715091,
          "pitch": -0.3608843816592753,
          "rotation": 0,
          "target": "4-innenraumperspektive"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-innenraumperspektive",
      "name": "Innenraumperspektive",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6314267435345542,
          "pitch": -0.32494719606691547,
          "rotation": 0,
          "target": "5-dachaufbau-innen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dachaufbau-innen",
      "name": "Dachaufbau Innen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.012341356349907073,
        "pitch": 0.06712804815362716,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3246568908984688,
          "pitch": -0.016328513855736304,
          "rotation": 0,
          "target": "6-dach-auen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dach-auen",
      "name": "Dach Außen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1304654605061657,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8355249058020258,
          "pitch": 0.3093349518081059,
          "rotation": 0,
          "target": "0-vogelperspektive"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PARK haus",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
