angular.module('madCowForum')
  .controller('postController', PostController)

PostController.$inject = ['$resource', '$http']

function PostController($resource, $http){
  var self = this;
  self.posts = [];
  self.newPost = {};

  var Post = $resource('http://localhost:3000/posts/:id', {id: '@_id'}, 
  {  
    'update': { method: 'PUT'},
    'query': { method: 'GET', isArray: true}
  });

   self.posts = Post.query();



  this.IsVisible = false;
  this.ShowHide = function () {
    this.IsVisible = this.IsVisible ? false : true;
    };

  this.postsEmpty = function(){
    return this.posts.length > 0 ? false : true;
  }



  self.addPost = function(){
    
    self.newPost.date = (new Date()).toString().split(' ').splice(1,3).join(' ')
    self.newPost.time = (new Date()).toString().split(' ')[4]

    self.posts.push(self.newPost);
    $http
      .post('http://localhost:3000/posts', self.newPost)
      .then(function(){
        self.newCriminal = {};
      })
    self.newPost = {};
  }






  
}