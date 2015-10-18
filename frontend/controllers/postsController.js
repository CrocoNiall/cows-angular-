angular.module('madCowForum')
  .controller('postController', PostController)

PostController.$inject = ['$resource']

function PostController($resource){
  var self = this;


  var Post = $resource('http://localhost:3000/posts/:id', {id: '@_id'}, 
  {  
    'update': { method: 'PUT'},
    'query': { method: 'GET', isArray: true}
  });



   self.posts = Post.query();

  
}