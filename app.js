import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestaurantContainer
 *       - RestaurantCard
 *          - Image
 *          - Name
 *          - Cuisine
 *          - Rating
 *          - Delivery time
 *          - Location
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "654809",
      name: "Meghana Foods",
      cloudinaryImageId: "c627e55c996978a070c10079ae57f706",
      locality: "G R S TOWERS",
      areaName: "Sarjapur Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "654809",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4300,
      },
      parentId: "635",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-g-r-s-towers-sarjapur-road-bangalore-654809",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "428",
      name: "Biryani Pot",
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      locality: "Maruti Nagar",
      areaName: "Btm Layout",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Biryani"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "428",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "21798",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
        secondaryDiscountCallout: "+ EXTRA ₹50 OFF",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/biryani-pot-maruti-nagar-btm-layout-bangalore-428",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "337335",
      name: "Kannur food kitchen",
      cloudinaryImageId: "a27weqanhnszqiuzsoik",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Kerala", "Biryani", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "337335",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5300,
      },
      parentId: "114756",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kannur-food-kitchen-1st-stage-btm-layout-bangalore-337335",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "426",
      name: "Hotel Empire",
      cloudinaryImageId: "gswvotfmtwj47y7o7nqh",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "426",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "475",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
        headerTypeV2: "HEADER_TYPE_V2_TOP_UP",
        secondaryDiscountCallout: "+ EXTRA ₹50 OFF",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-empire-hsr-layout-bangalore-426",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "319530",
      name: "Malnad Donne Biriyani MDB",
      cloudinaryImageId: "kamm1so6elz9i1usjosv",
      locality: "Kodichikanahalli Main Road",
      areaName: "Bommanahalli",
      costForTwo: "₹199 for two",
      cuisines: ["Biryani", "Chinese", "South Indian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "319530",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5300,
      },
      parentId: "130946",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 16:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/malnad-donne-biriyani-mdb-kodichikanahalli-main-road-bommanahalli-bangalore-319530",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "201224",
      name: "Asha tiffins",
      cloudinaryImageId: "n15vckntsiboiod3gpco",
      locality: "7th Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "South Indian", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "201224",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "236243",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "94703",
      name: "Sri Punjabi Dhaba",
      cloudinaryImageId: "i53hrycmcn2oehrojag0",
      locality: "Cashier Layout",
      areaName: "BTM Layout",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Kebabs"],
      avgRating: 3,
      feeDetails: {
        restaurantId: "94703",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "21426",
      avgRatingString: "3.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-punjabi-dhaba-cashier-layout-btm-layout-bangalore-94703",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "42294",
      name: "Udupi Palace",
      cloudinaryImageId: "dbfp4mqtidbjh9sectlk",
      locality: "2nd Sector",
      areaName: "HSR Layout",
      costForTwo: "₹150 for two",
      cuisines: [
        "South Indian",
        "Snacks",
        "Chinese",
        "Beverages",
        "North Indian",
        "Desserts",
      ],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "42294",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "6971",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/udupi-palace-2nd-sector-hsr-layout-bangalore-42294",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "57283",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "3rd Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "57283",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 03:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-7398133b-ced8-4bed-b606-858dfb49b351",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-3rd-sector-hsr-layout-bangalore-57283",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "201224",
      name: "Asha tiffins",
      cloudinaryImageId: "n15vckntsiboiod3gpco",
      locality: "7th Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "South Indian", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "201224",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "236243",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "241027",
      name: "Namaste",
      cloudinaryImageId: "dtcwa1rxdskp3crqvpr3",
      locality: "3rd Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹100 for two",
      cuisines: [
        "South Indian",
        "Thalis",
        "Biryani",
        "Desserts",
        "Beverages",
        "Indian",
      ],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "241027",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "366271",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/namaste-3rd-sector-hsr-layout-bangalore-241027",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "674334",
      name: "Pasta & Pizza",
      cloudinaryImageId: "6d57a1333281cb074256eb0934b1a2da",
      locality: "Sector-3",
      areaName: "HSR Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Pastas", "Pizzas", "Snacks", "Fast Food", "Chinese"],
      avgRating: 3.2,
      feeDetails: {
        restaurantId: "674334",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "155951",
      avgRatingString: "3.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pasta-and-pizza-sector-3-hsr-layout-bangalore-674334",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "229",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5300,
      },
      parentId: "635",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-koramangala-bangalore-229",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "304",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "fwkkx0iaiuyojevcxxnp",
      locality: "Dr Puneeth Rajkumar Rd",
      areaName: "HSR Layout",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "304",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "22",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-dr-puneeth-rajkumar-rd-hsr-layout-bangalore-304",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "289694",
      name: "Sri Udupi Sagar",
      cloudinaryImageId: "z7q1fmri5lvk29mdzrof",
      locality: "Gangothri Circle",
      areaName: "Btm Layout",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "North Indian", "Chinese"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "289694",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "194698",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-udupi-sagar-gangothri-circle-btm-layout-bangalore-289694",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "407773",
      name: "Babai Tiffins",
      cloudinaryImageId: "2056b9a7dffb912c8c16d923186b1905",
      locality: "6th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Andhra", "Fast Food", "Snacks"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "407773",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "39052",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/babai-tiffins-6th-sector-hsr-layout-bangalore-407773",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "42294",
      name: "Udupi Palace",
      cloudinaryImageId: "dbfp4mqtidbjh9sectlk",
      locality: "2nd Sector",
      areaName: "HSR Layout",
      costForTwo: "₹150 for two",
      cuisines: [
        "South Indian",
        "Snacks",
        "Chinese",
        "Beverages",
        "North Indian",
        "Desserts",
      ],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "42294",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "6971",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/udupi-palace-2nd-sector-hsr-layout-bangalore-42294",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "57283",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "3rd Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "57283",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-14 03:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-a5c651d7-0da5-4ce9-9fb7-367561389f08",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-3rd-sector-hsr-layout-bangalore-57283",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
]

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    cloudinaryImageId,
    sla: { deliveryTime }
  } = resData.info;
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="res-name">{name}</div>
      <div className="res-cuisine">{cuisines.join(", ")}</div>
      <div className="res-rating"> {avgRating} Stars</div>
      <div className="res-delivery-time">DeliveryTime: {deliveryTime} mins</div>
      <div className="res-area-name">{areaName}</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
