export default class DashboardService {
  static async TotalAmountDue(authorization: string, id: number) {
    try {
      const url = `https://us-central1-prayer-partner-dev-410818.cloudfunctions.net/user-progress?userId=${id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      });
      const obj = await response.json();
      return {...obj, success: true};
    } catch (err) {
      return {
        success: false,
        message: 'Please check your internet connection',
      };
    }
  }
}
