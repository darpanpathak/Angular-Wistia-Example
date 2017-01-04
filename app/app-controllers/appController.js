(function () {

    var app = angular.module('videoupload');

    app.controller('DashboardCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
        $scope.file = {};
        $scope.uploadPic = function (vdo) {
            $scope.uploadFiles(vdo);
        }

        $scope.uploadFiles = function (file, errFiles) {

            var fd = new FormData();
            fd.file = file;
            fd.api_password = "3046fdc81bd2ff6d014914ec4902e0f225ab3b35aa66ec20c5a4e522d92f29fb";
            fd.project_id = "0giucwpq6c";

            if (file) {
                file.upload = Upload.upload({
                    url: 'https://upload.wistia.com/',
                    data: fd
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;

                        $('#divplayer').append('<script src="//fast.wistia.com/embed/medias/' + response.data.hashed_id + '.jsonp" async></script><script src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:50.83% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_' + response.data.hashed_id + ' videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>');

                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });

            }
        }




        // var api_password = "3046fdc81bd2ff6d014914ec4902e0f225ab3b35aa66ec20c5a4e522d92f29fb";
        // var url = "https://upload.wistia.com/";

        // var fd = new FormData();
        // fd.append('file', file);

        // $scope.loadingFiles = true;
        // $http({
        //         url: 'https://upload.wistia.com',
        //         method: "POST",
        //         data: $scope.options
        //     })
        //     .then(
        //         function (response) {
        //             $scope.loadingFiles = false;

        //         },
        //         function () {
        //             $scope.loadingFiles = false;
        //         }
        //     );


    }]);


})();