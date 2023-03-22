import * as ActionTypes from '../actions/types';

const defaultHomeState = {
  isLoading: false,
  error: null,
  successMsg: '',
  allCategories: [],
};

export default function categoryReducer(state = defaultHomeState, action) {
  switch (action.type) {
    case ActionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCategories: transformData(action.payload.data),
      };
    case ActionTypes.GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const transformData = catDatas => {
  const categories = catDatas?.category || [];
  const recommendationData = catDatas?.recommentation;
  const recommmendationParentData = [
    {
      id: 'recommendation',
      category_unique_id: 'CAT-recommendation',
      sub_category: recommendationData?.category || [],
      top_brands: {
        featured_brand: recommendationData?.top_brand?.featured_brand || [],
      },
      lang: [
        {name: 'Recommendation', language: 'en'},
        {name: 'Recommendation-ar', language: 'ar'},
      ],
    },
  ];
  const categoryListWithRecommend = [
    ...recommmendationParentData,
    ...categories,
  ];
  return categoryListWithRecommend;
};
