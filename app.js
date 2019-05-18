var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 7000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs((slideIndex += n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
var myFormApp = angular.module("myFormApp", []);
myFormApp.controller("myFormController", [
  "$scope",
  function($scope) {
    $scope.forms = [];
    $scope.addForm = function() {
      $scope.forms.push({
        formname: $scope.newform.formname,
        fields: [
          {
            required: true,
            name: $scope.newform.isim
          },
          {
            required: true,
            surname: $scope.newform.soyisim
          },
          {
            yas: parseInt($scope.newform.yas)
          }
        ]
      });
      $scope.newform.formname = "";
      $scope.newform.isim = "";
      $scope.newform.soyisim = "";
      $scope.newform.yas = "";
    };
  }
]);
