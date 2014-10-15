define('frame/faq-controller', ['frame/app', 'services/faq'], function (app, faqService) {
    app.controller('faqController', ['$scope', '$sce', '$rootScope',
      function ($scope, $sce, $rootScope) {
          if ($('.CI_scrollable') !== undefined) {
              //$('.CI_scrollable').width($(window).width() - 12);
              $('.CI_scrollable').height($(window).height() - 77);
          }


          var parentScope = $scope.$parent.$parent.$parent.$parent.$parent.$parent;

          $scope.title = 'faqController Tab';
          $scope.thread = parentScope.thread;
          $scope.language = parentScope.language;

          $scope.faqList = [];

          $scope.bigCurrentPage = 1;
          $scope.maxSize = 5;
          $scope.itemsPerPage = 5;
          $scope.bigTotalItems = 0;

          $scope.setPage = function (pageNo) {
              $scope.currentPage = pageNo;
          };


          faqService.getList($scope.thread, $scope.language, ($scope.bigCurrentPage - 1) * $scope.itemsPerPage, $scope.itemsPerPage)
              .done(function (data) {
                  data.list.forEach(function (it) {
                      $scope.faqList.push({ id: it.QuestionId, question: it.Question, answer: it.Answer, answerHtml: $sce.trustAsHtml(it.Answer), weight: it.Weight });
                  });
                  $scope.bigTotalItems = data.totalRecords;
                  $scope.$apply();
              });

          $scope.add = function add() {
              faqService.addQuestion($scope.language, $scope.$$childTail.$$childTail.question, $scope.$$childTail.$$childTail.answer, $scope.thread)
                  .done(function () {
                      $rootScope.$broadcast('tabsContentChanged');
                  });
          };
          $scope.update = function update(item) {
              item.answerHtml = $sce.trustAsHtml(item.answer);
              faqService.updateQuestion(item.question, item.answer, item.id)
                  .done(function () {
                      $rootScope.$broadcast('tabsContentChanged');
                  });
          };


          $scope.stopProp = function (e) {
              e.stopPropagation();
              return false;
          };

          $scope.onSelectPage = function onSelectPage(page) {
              faqService.getList($scope.thread, $scope.language, (page - 1) * $scope.itemsPerPage, $scope.itemsPerPage)
                  .done(function (data) {
                      $scope.faqList = [];
                      data.list.forEach(function (it) {
                          $scope.faqList.push({ id: it.QuestionId, question: it.Question, answer: it.Answer, answerHtml: $sce.trustAsHtml(it.Answer), weight: it.Weight });
                      });
                      $scope.bigTotalItems = data.totalRecords;
                      $scope.$apply();
                  });
          };
          $scope.vote = function vote(isGood, item, e) {
              e.stopPropagation();
              faqService.voteQuestion(item.id, $scope.thread, isGood)
                  .done(function (data) {
                      item.weight = data;
                      window.setTimeout(function() {
                          $scope.$apply();
                      });
                  });
          };
          $scope.tinymceOptions = {
              theme: "modern",
              plugins: [
                  "anchor code contextmenu image insertdatetime link lists media paste preview searchreplace table wordcount"
              ],
              toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
              toolbar2: "media | forecolor backcolor | code | image ",
              image_advtab: true,
              height: "200px",
              width: "650px"
          };
      }
    ]);
})