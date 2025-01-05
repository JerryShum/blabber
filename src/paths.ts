const paths = {
   home() {
      return '/';
   },
   blurbIDPage(blurbID: number) {
      return `/blurbs/${blurbID}`;
   },
   blurbCreate() {
      return `/blurbs/new`;
   },
   userPage(userID: string) {
      return `/user/${userID}`;
   },
   aboutPage() {
      return '/about';
   },
   explorePage() {
      return '/explore';
   },
   topicPage(topicName: string) {
      return `/explore/${topicName}`;
   },
   LoginPage() {
      return '/login';
   },
   SignUpPage() {
      return '/signup';
   },
};

export default paths;
