const paths = {
   home() {
      return '/';
   },
   blurbIDPage(blurbID: string) {
      return `/blurbs/${blurbID}`;
   },
   blurbCreate() {
      return `/blurbs/new`;
   },
   userPage(username: string) {
      return `/user/${username}`;
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
