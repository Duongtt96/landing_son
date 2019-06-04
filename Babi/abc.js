script>
                      !(function () {
                        document.getElementById("select-color1").addEventListener("click", function () {
                          document.getElementById("select-img1").style.display = "block";
                          document.getElementById("img-sm1").style.display = "block";

                          document.getElementById("select-img3").style.display = "none";
                          document.getElementById("select-img2").style.display = "none";
                          document.getElementById("img-sm2").style.display = "none";
                          document.getElementById("img-sm3").style.display = "none";
                        });

                        document.getElementById("select-color2").addEventListener("click", function () {
                          document.getElementById("select-img2").style.display = "block";
                          document.getElementById("img-sm2").style.display = "block";
                          document.getElementById("select-img1").style.display = "none";
                          document.getElementById("select-img3").style.display = "none";
                          document.getElementById("img-sm1").style.display = "none";
                          document.getElementById("img-sm3").style.display = "none";

                        });
                        document.getElementById("select-color3").addEventListener("click", function () {
                          document.getElementById("select-img3").style.display = "block";
                          document.getElementById("img-sm3").style.display = "block";
                          document.getElementById("select-img1").style.display = "none";
                          document.getElementById("select-img2").style.display = "none";
                          document.getElementById("img-sm1").style.display = "none";
                          document.getElementById("img-sm2").style.display = "none";

                        });
                      })();
                    </script>