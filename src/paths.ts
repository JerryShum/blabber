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
};

export default paths;
