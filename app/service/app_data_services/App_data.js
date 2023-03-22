import ServiceWrapperAwait from '../service/ServiceWrapperAwait';

export default class App_data {

  salonAllDetails = async () => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    const response = await sAsyncWrapper.get('salon-app/salons/edit/salon-details');

    return {
      data: typeof response.data != 'undefined' ? response.data : [],
      status: response.success,
      langChosen: response.langSelected,
      loading: false,
    };
  }

}