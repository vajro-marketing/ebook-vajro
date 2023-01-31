      let period = document.getElementById("period_field");
      for(let r=0; r<period.options.length; r++){
      		if(r>1){
      		   period.options[r].setAttribute('disabled','disabled');
          }
      } 
      document.getElementById("ebook-submit").addEventListener("click", function (e) {
          e.preventDefault();
          var form = document.getElementById("ebook-form");
          var formData = new FormData(form);
          var values = [...formData.entries()];
          var source;
          let currentdate = new Date();
          let times = currentdate.toTimeString();
          let dates = currentdate.toDateString();
          var name = values[0][1];
          var email = values[1][1];
          var phone = values[2][1];
          var nameValue = false,
            emailValue = false,
            phoneValue = false;
          if (name != "") {
            nameValue = true;
            document.getElementById("Form_name_err").style.display = "none";
          } else {
            document.getElementById("Form_name_err").style.display = "block";
          }

          const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
          if (mailformat.test(email)) {
            emailValue = true;
            document.getElementById("Form_email_err").style.display = "none";
          } else {
            document.getElementById("Form_email_err").style.display = "block";
          }
          var re =
            /\(?\+?\d{1,4}?\)?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
          if (re.test(phone)) {
            phoneValue = true;
            document.getElementById("Form_phone_err").style.display = "none";
          } else {
            document.getElementById("Form_phone_err").style.display = "block";
          }
          source = window.location.search
            ? JSON.parse(
                '{"' +
                  decodeURI(
                    window.location.search
                      .substring(1)
                      .replace(/&/g, '","')
                      .replace(/=/g, '":"')
                  ) +
                  '"}'
              )
            : "";
           var ebook_name = document.getElementById("name-ebook").innerHTML;
           var ebook_url =  document.getElementById("file-url").innerHTML;
          if (nameValue && emailValue && phoneValue) {
            var jsondata = JSON.stringify({
              ebook: ebook_name ? ebook_name : "",
              name: name ? name : "",
              email: email ? email : "",
              phone: phone,
              agency: source.utm_source,
              medium: source.utm_medium,
              campaignname: source.utm_campaign,
              date: dates,
              time: times,
            });
            axios
              .post(
                "https://api.apispreadsheets.com/data/pBveJOwzsSA4simL/",
                jsondata
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            var a = document.createElement("a");
            a.setAttribute("download", ebook_name);
            a.setAttribute("href", ebook_url);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        });
        document.getElementById("ebook-submit-2").addEventListener("click", function (e) {
          e.preventDefault();
          var form = document.getElementById("ebook-form-2");
          var formData = new FormData(form);
          var values = [...formData.entries()];
          var source;
          let currentdate = new Date();
          let times = currentdate.toTimeString();
          let dates = currentdate.toDateString();
          var name = values[0][1];
          var email = values[1][1];
          var phone = values[2][1];
          var period = values[3][1];
          var nameValue = false,
            emailValue = false,
            phoneValue = false,
            periodvalue = false;
          
          if (name != "") {
            nameValue = true;
            document.getElementById("Form2_name_err").style.display = "none";
          } else {
            document.getElementById("Form2_name_err").style.display = "block";
          }

          const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
          if (mailformat.test(email)) {
            emailValue = true;
            document.getElementById("Form2_email_err").style.display = "none";
          } else {
            document.getElementById("Form2_email_err").style.display = "block";
          }
          var re =
            /\(?\+?\d{1,4}?\)?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
          if (re.test(phone)) {
            phoneValue = true;
            document.getElementById("Form2_phone_err").style.display = "none";
          } else {
            document.getElementById("Form2_phone_err").style.display = "block";
          }
          if(period != "Period"){
          		periodvalue=true; 
              document.getElementById("Form2_period_err").style.display = "none";
          } else {
            document.getElementById("Form2_period_err").style.display = "block";
          }
          source = window.location.search
            ? JSON.parse(
                '{"' +
                  decodeURI(
                    window.location.search
                      .substring(1)
                      .replace(/&/g, '","')
                      .replace(/=/g, '":"')
                  ) +
                  '"}'
              )
            : "";
              var ebook_name = document.getElementById("name-ebook-push").innerHTML;
           var ebook_url = document.getElementById("push-file-url").innerHTML;
          if (nameValue && emailValue && phoneValue && periodvalue) {
            var jsondata = JSON.stringify({
              ebook: ebook_name ? ebook_name : "",
              name: name ? name : "",
              email: email ? email : "",
              phone: phone,
              agency: source.utm_source,
              medium: source.utm_medium,
              campaignname: source.utm_campaign,
              date: dates,
              time: times,
            });
            axios
              .post(
                "https://api.apispreadsheets.com/data/pBveJOwzsSA4simL/",
                jsondata
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
              setTimeout(() => {
                var a = document.createElement("a");
                a.setAttribute("download", ebook_name);
                a.setAttribute("href", ebook_url);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }, "1000")
          }
        });
