const generation = document.querySelector('.generation');
if (generation) {
  const togr = document.querySelector('#generation__right');
  const generationforms = document.querySelectorAll(".generation__right .generation__form");
  const generationbuttons = document.querySelectorAll(".generation__left .generation__button");
  const gformone = document.getElementById('generation__form_one');
  const gformtwo = document.getElementById('generation__form_two');
  const gformthree = document.getElementById('generation__form_three');
  const gformfour = document.getElementById('generation__form_four');
  const gousername = document.getElementById('generation__one_username');
  const gophone = document.getElementById('generation__one_phone');
  const goemail = document.getElementById('generation__one_email');
  const gotg = document.getElementById('generation__one_tg');
  const goorg = document.getElementById('generation__one_org');
  const googrn = document.getElementById('generation__one_ogrn');
  const goinn = document.getElementById('generation__one_inn');
  const gokpp = document.getElementById('generation__one_kpp');
  const goaddress = document.getElementById('generation__one_address');
  const gookpo = document.getElementById('generation__one_okpo');
  const gookved = document.getElementById('generation__one_okved');
  const goorganization = document.getElementById('generation__one_organization');
  const gocorrespondent = document.getElementById('generation__one_correspondent');
  const gobik = document.getElementById('generation__one_bik');
  
  const gtusername = document.getElementById('generation__two_username');
  const gtphone = document.getElementById('generation__two_phone');
  const gtemail = document.getElementById('generation__two_email');
  const gttg = document.getElementById('generation__two_tg');
  const gtorg = document.getElementById('generation__two_org');
  const gtogrn = document.getElementById('generation__two_ogrn');
  const gtinn = document.getElementById('generation__two_inn');
  const gtkpp = document.getElementById('generation__two_kpp');
  const gtaddress = document.getElementById('generation__two_address');
  const gtokpo = document.getElementById('generation__two_okpo');
  const gtokved = document.getElementById('generation__two_okved');
  const gtorganization = document.getElementById('generation__two_organization');
  const gtcorrespondent = document.getElementById('generation__two_correspondent');
  const gtbik = document.getElementById('generation__two_bik');
  
  const gthusername = document.getElementById('generation__three_username');
  const gthphone = document.getElementById('generation__three_phone');
  const gthemail = document.getElementById('generation__three_email');
  const gthtg = document.getElementById('generation__three_tg');
  const gthorg = document.getElementById('generation__three_org');
  const gthogrn = document.getElementById('generation__three_ogrn');
  const gthinn = document.getElementById('generation__three_inn');
  const gthkpp = document.getElementById('generation__three_kpp');
  const gthaddress = document.getElementById('generation__three_address');
  const gthokpo = document.getElementById('generation__three_okpo');
  const gthokved = document.getElementById('generation__three_okved');
  const gthorganization = document.getElementById('generation__three_organization');
  const gthcorrespondent = document.getElementById('generation__three_correspondent');
  const gthbik = document.getElementById('generation__three_bik');
  const gthprice = document.getElementById('generation__three_price');
  
  const formgeneration = document.getElementById('form__generation');
  const generationusername = document.getElementById('generation__username');
  const generationphone = document.getElementById('generation__phone');
  const generationemail = document.getElementById('generation__email');
  const generationbasicterms = document.getElementById('generation__basicterms');
  const generationtarget = document.getElementById('generation__target');
  const generationknow = document.getElementById('generation__know');
  const generationaudience = document.getElementById('generation__audience');
  const generationchoice = document.getElementById('generation__choice');
  const generationlink = document.getElementById('generation__link');
  const generationtopics = document.getElementById('generation__topics');
  const generationnotopics = document.getElementById('generation__notopics');
  const generationprice = document.getElementById('generation__price');
  const generationimpression = document.getElementById('generation__impression');
  const generationimportant = document.getElementById('generation__important');
  const generationlike = document.getElementById('generation__like');
  const generationproblems = document.getElementById('generation__problems');
  const generationtriggers = document.getElementById('generation__triggers');
  const generationinfoball = document.getElementById('generation__infoball');
  const generationneeds = document.getElementById('generation__needs');
  const generationbarriers = document.getElementById('generation__barriers');
  const generationstrive = document.getElementById('generation__strive');
  const generationdesign = document.getElementById('generation__design');
  const generationassociations = document.getElementById('generation__associations');
  const generationsegment = document.getElementById('generation__segment');

  // start Min Max
  const gousernameMin = gousername.getAttribute('minl');
  const gousernameMax = gousername.getAttribute('maxl');
  const gophoneMin = gophone.getAttribute('minl');
  const gophoneMax = gophone.getAttribute('maxl');
  const goemailMin = goemail.getAttribute('minl');
  const goemailMax = goemail.getAttribute('maxl');
  const gotgMin = gotg.getAttribute('minl');
  const gotgMax = gotg.getAttribute('maxl');
  const goorgMin = goorg.getAttribute('minl');
  const goorgMax = goorg.getAttribute('maxl');
  const googrnMin = googrn.getAttribute('minl');
  const googrnMax = googrn.getAttribute('maxl');
  const goinnMin = goinn.getAttribute('minl');
  const goinnMax = goinn.getAttribute('maxl');
  const gokppMin = gokpp.getAttribute('minl');
  const gokppMax = gokpp.getAttribute('maxl');
  const goaddressMin = goaddress.getAttribute('minl');
  const goaddressMax = goaddress.getAttribute('maxl');
  const gookpoMin = gookpo.getAttribute('minl');
  const gookpoMax = gookpo.getAttribute('maxl');
  const gookvedMin = gookved.getAttribute('minl');
  const gookvedMax = gookved.getAttribute('maxl');
  const goorganizationMin = goorganization.getAttribute('minl');
  const goorganizationMax = goorganization.getAttribute('maxl');
  const gocorrespondentMin = gocorrespondent.getAttribute('minl');
  const gocorrespondentMax = gocorrespondent.getAttribute('maxl');
  const gobikMin = gobik.getAttribute('minl');
  const gobikMax = gobik.getAttribute('maxl');
  
  const gtusernameMin = gtusername.getAttribute('minl');
  const gtusernameMax = gtusername.getAttribute('maxl');
  const gtphoneMin = gtphone.getAttribute('minl');
  const gtphoneMax = gtphone.getAttribute('maxl');
  const gtemailMin = gtemail.getAttribute('minl');
  const gtemailMax = gtemail.getAttribute('maxl');
  const gttgMin = gttg.getAttribute('minl');
  const gttgMax = gttg.getAttribute('maxl');
  const gtorgMin = gtorg.getAttribute('minl');
  const gtorgMax = gtorg.getAttribute('maxl');
  const gtogrnMin = gtogrn.getAttribute('minl');
  const gtogrnMax = gtogrn.getAttribute('maxl');
  const gtinnMin = gtinn.getAttribute('minl');
  const gtinnMax = gtinn.getAttribute('maxl');
  const gtkppMin = gtkpp.getAttribute('minl');
  const gtkppMax = gtkpp.getAttribute('maxl');
  const gtaddressMin = gtaddress.getAttribute('minl');
  const gtaddressMax = gtaddress.getAttribute('maxl');
  const gtokpoMin = gtokpo.getAttribute('minl');
  const gtokpoMax = gtokpo.getAttribute('maxl');
  const gtokvedMin = gtokved.getAttribute('minl');
  const gtokvedMax = gtokved.getAttribute('maxl');
  const gtorganizationMin = gtorganization.getAttribute('minl');
  const gtorganizationMax = gtorganization.getAttribute('maxl');
  const gtcorrespondentMin = gtcorrespondent.getAttribute('minl');
  const gtcorrespondentMax = gtcorrespondent.getAttribute('maxl');
  const gtbikMin = gtbik.getAttribute('minl');
  const gtbikMax = gtbik.getAttribute('maxl');
  
  const gthusernameMin = gthusername.getAttribute('minl');
  const gthusernameMax = gthusername.getAttribute('maxl');
  const gthphoneMin = gthphone.getAttribute('minl');
  const gthphoneMax = gthphone.getAttribute('maxl');
  const gthemailMin = gthemail.getAttribute('minl');
  const gthemailMax = gthemail.getAttribute('maxl');
  const gthtgMin = gthtg.getAttribute('minl');
  const gthtgMax = gthtg.getAttribute('maxl');
  const gthorgMin = gthorg.getAttribute('minl');
  const gthorgMax = gthorg.getAttribute('maxl');
  const gthogrnMin = gthogrn.getAttribute('minl');
  const gthogrnMax = gthogrn.getAttribute('maxl');
  const gthinnMin = gthinn.getAttribute('minl');
  const gthinnMax = gthinn.getAttribute('maxl');
  const gthkppMin = gthkpp.getAttribute('minl');
  const gthkppMax = gthkpp.getAttribute('maxl');
  const gthaddressMin = gthaddress.getAttribute('minl');
  const gthaddressMax = gthaddress.getAttribute('maxl');
  const gthokpoMin = gthokpo.getAttribute('minl');
  const gthokpoMax = gthokpo.getAttribute('maxl');
  const gthokvedMin = gthokved.getAttribute('minl');
  const gthokvedMax = gthokved.getAttribute('maxl');
  const gthorganizationMin = gthorganization.getAttribute('minl');
  const gthorganizationMax = gthorganization.getAttribute('maxl');
  const gthcorrespondentMin = gthcorrespondent.getAttribute('minl');
  const gthcorrespondentMax = gthcorrespondent.getAttribute('maxl');
  const gthbikMin = gthbik.getAttribute('minl');
  const gthbikMax = gthbik.getAttribute('maxl');
  
  const generationusernameMin = generationusername.getAttribute('minl');
  const generationusernameMax = generationusername.getAttribute('maxl');
  const generationphoneMin = generationphone.getAttribute('minl');
  const generationphoneMax = generationphone.getAttribute('maxl');
  const generationemailMin = generationemail.getAttribute('minl');
  const generationemailMax = generationemail.getAttribute('maxl');
  const generationbasictermsMin = generationbasicterms.getAttribute('minl');
  const generationbasictermsMax = generationbasicterms.getAttribute('maxl');
  const generationtargetMin = generationtarget.getAttribute('minl');
  const generationtargetMax = generationtarget.getAttribute('maxl');
  const generationknowMin = generationknow.getAttribute('minl');
  const generationknowMax = generationknow.getAttribute('maxl');
  const generationaudienceMin = generationaudience.getAttribute('minl');
  const generationaudienceMax = generationaudience.getAttribute('maxl');
  const generationchoiceMin = generationchoice.getAttribute('minl');
  const generationchoiceMax = generationchoice.getAttribute('maxl');
  const generationlinkMin = generationlink.getAttribute('minl');
  const generationlinkMax = generationlink.getAttribute('maxl');
  const generationtopicsMin = generationtopics.getAttribute('minl');
  const generationtopicsMax = generationtopics.getAttribute('maxl');
  const generationnotopicsMin = generationnotopics.getAttribute('minl');
  const generationnotopicsMax = generationnotopics.getAttribute('maxl');
  const generationpriceMin = generationprice.getAttribute('minl');
  const generationpriceMax = generationprice.getAttribute('maxl');
  const generationimpressionMin = generationimpression.getAttribute('minl');
  const generationimpressionMax = generationimpression.getAttribute('maxl');
  const generationimportantMin = generationimportant.getAttribute('minl');
  const generationimportantMax = generationimportant.getAttribute('maxl');
  const generationlikeMin = generationlike.getAttribute('minl');
  const generationlikeMax = generationlike.getAttribute('maxl');
  const generationproblemsMin = generationproblems.getAttribute('minl');
  const generationproblemsMax = generationproblems.getAttribute('maxl');
  const generationtriggersMin = generationtriggers.getAttribute('minl');
  const generationtriggersMax = generationtriggers.getAttribute('maxl');
  const generationinfoballMin = generationinfoball.getAttribute('minl');
  const generationinfoballMax = generationinfoball.getAttribute('maxl');
  const generationneedsMin = generationneeds.getAttribute('minl');
  const generationneedsMax = generationneeds.getAttribute('maxl');
  const generationbarriersMin = generationbarriers.getAttribute('minl');
  const generationbarriersMax = generationbarriers.getAttribute('maxl');
  const generationstriveMin = generationstrive.getAttribute('minl');
  const generationstriveMax = generationstrive.getAttribute('maxl');
  const generationdesignMin = generationdesign.getAttribute('minl');
  const generationdesignMax = generationdesign.getAttribute('maxl');
  const generationassociationsMin = generationassociations.getAttribute('minl');
  const generationassociationsMax = generationassociations.getAttribute('maxl');
  const generationsegmentMin = generationsegment.getAttribute('minl');
  const generationsegmentMax = generationsegment.getAttribute('maxl');
  // end Min Max

  // start counter
  const finputs = document.querySelectorAll(".form__input");

  for (i = 0; i < finputs.length; i++) {
    finputs[i].addEventListener("input", updateValue);
    finputs[i].nextElementSibling.children[1].textContent = finputs[i].getAttribute('maxl');
  }

  function updateValue() {
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  }

  goemail.addEventListener('input', function () {
    const goemailValid = goemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isEmailGValid(goemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  gtemail.addEventListener('input', function () {
    const gtemailValid = gtemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isEmailGValid(gtemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  gthemail.addEventListener('input', function () {
    const gthemailValid = gthemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isEmailGValid(gthemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  generationemail.addEventListener('input', function () {
    const generationemailValid = generationemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isEmailGValid(generationemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  function isEmailGValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  // end counter

  // start maxleight
  gousername.oninput = function(){this.value = this.value.substr(0, gousernameMax);}
  gophone.oninput = function(){this.value = this.value.substr(0, gophoneMax);}
  goemail.oninput = function(){this.value = this.value.substr(0, goemailMax);}
  gotg.oninput = function(){this.value = this.value.substr(0, gotgMax);}
  goorg.oninput = function(){this.value = this.value.substr(0, goorgMax);}
  googrn.oninput = function(){this.value = this.value.substr(0, googrnMax);}
  goinn.oninput = function(){this.value = this.value.substr(0, goinnMax);}
  gokpp.oninput = function(){this.value = this.value.substr(0, gokppMax);}
  goaddress.oninput = function(){this.value = this.value.substr(0, goaddressMax);}
  gookpo.oninput = function(){this.value = this.value.substr(0, gookpoMax);}
  gookved.oninput = function(){this.value = this.value.substr(0, gookvedMax);}
  goorganization.oninput = function(){this.value = this.value.substr(0, goorganizationMax);}
  gocorrespondent.oninput = function(){this.value = this.value.substr(0, gocorrespondentMax);}
  gobik.oninput = function(){this.value = this.value.substr(0, gobikMax);}
  
  gtusername.oninput = function(){this.value = this.value.substr(0, gtusernameMax);}
  gtphone.oninput = function(){this.value = this.value.substr(0, gtphoneMax);}
  gtemail.oninput = function(){this.value = this.value.substr(0, gtemailMax);}
  gttg.oninput = function(){this.value = this.value.substr(0, gttgMax);}
  gtorg.oninput = function(){this.value = this.value.substr(0, gtorgMax);}
  gtogrn.oninput = function(){this.value = this.value.substr(0, gtogrnMax);}
  gtinn.oninput = function(){this.value = this.value.substr(0, gtinnMax);}
  gtkpp.oninput = function(){this.value = this.value.substr(0, gtkppMax);}
  gtaddress.oninput = function(){this.value = this.value.substr(0, gtaddressMax);}
  gtokpo.oninput = function(){this.value = this.value.substr(0, gtokpoMax);}
  gtokved.oninput = function(){this.value = this.value.substr(0, gtokvedMax);}
  gtorganization.oninput = function(){this.value = this.value.substr(0, gtorganizationMax);}
  gtcorrespondent.oninput = function(){this.value = this.value.substr(0, gtcorrespondentMax);}
  gtbik.oninput = function(){this.value = this.value.substr(0, gtbikMax);}
  
  gthusername.oninput = function(){this.value = this.value.substr(0, gthusernameMax);}
  gthphone.oninput = function(){this.value = this.value.substr(0, gthphoneMax);}
  gthemail.oninput = function(){this.value = this.value.substr(0, gthemailMax);}
  gthtg.oninput = function(){this.value = this.value.substr(0, gthtgMax);}
  gthorg.oninput = function(){this.value = this.value.substr(0, gthorgMax);}
  gthogrn.oninput = function(){this.value = this.value.substr(0, gthogrnMax);}
  gthinn.oninput = function(){this.value = this.value.substr(0, gthinnMax);}
  gthkpp.oninput = function(){this.value = this.value.substr(0, gthkppMax);}
  gthaddress.oninput = function(){this.value = this.value.substr(0, gthaddressMax);}
  gthokpo.oninput = function(){this.value = this.value.substr(0, gthokpoMax);}
  gthokved.oninput = function(){this.value = this.value.substr(0, gthokvedMax);}
  gthorganization.oninput = function(){this.value = this.value.substr(0, gthorganizationMax);}
  gthcorrespondent.oninput = function(){this.value = this.value.substr(0, gthcorrespondentMax);}
  gthbik.oninput = function(){this.value = this.value.substr(0, gthbikMax);}
  
  generationusername.oninput = function(){this.value = this.value.substr(0, generationusernameMax);}
  generationphone.oninput = function(){this.value = this.value.substr(0, generationphoneMax);}
  generationemail.oninput = function(){this.value = this.value.substr(0, generationemailMax);}
  generationbasicterms.oninput = function(){this.value = this.value.substr(0, generationbasictermsMax);}
  generationtarget.oninput = function(){this.value = this.value.substr(0, generationtargetMax);}
  generationknow.oninput = function(){this.value = this.value.substr(0, generationknowMax);}
  generationaudience.oninput = function(){this.value = this.value.substr(0, generationaudienceMax);}
  generationchoice.oninput = function(){this.value = this.value.substr(0, generationchoiceMax);}
  generationlink.oninput = function(){this.value = this.value.substr(0, generationlinkMax);}
  generationtopics.oninput = function(){this.value = this.value.substr(0, generationtopicsMax);}
  generationnotopics.oninput = function(){this.value = this.value.substr(0, generationnotopicsMax);}
  generationprice.oninput = function(){this.value = this.value.substr(0, generationpriceMax);}
  generationimpression.oninput = function(){this.value = this.value.substr(0, generationimpressionMax);}
  generationimportant.oninput = function(){this.value = this.value.substr(0, generationimportantMax);}
  generationlike.oninput = function(){this.value = this.value.substr(0, generationlikeMax);}
  generationproblems.oninput = function(){this.value = this.value.substr(0, generationproblemsMax);}
  generationtriggers.oninput = function(){this.value = this.value.substr(0, generationtriggersMax);}
  generationinfoball.oninput = function(){this.value = this.value.substr(0, generationinfoballMax);}
  generationneeds.oninput = function(){this.value = this.value.substr(0, generationneedsMax);}
  generationbarriers.oninput = function(){this.value = this.value.substr(0, generationbarriersMax);}
  generationstrive.oninput = function(){this.value = this.value.substr(0, generationstriveMax);}
  generationdesign.oninput = function(){this.value = this.value.substr(0, generationdesignMax);}
  generationassociations.oninput = function(){this.value = this.value.substr(0, generationassociationsMax);}
  generationsegment.oninput = function(){this.value = this.value.substr(0, generationsegmentMax);}
  // end maxleight

  // START step
  function setErrorForGeneration(input) {
    const gfControl = input.parentElement;
    gfControl.className = 'form__control error';
  }

  function setSuccessForGeneration(input) {
    const gfControl = input.parentElement;
    gfControl.className = 'form__control success';
  }

  function setGSelectErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__select error';
  }
  
  function setGSelectSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__select success';
  }

  const generationcontrols = document.querySelectorAll('.generation__controls');
  [...generationcontrols].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  const gbone = document.querySelector('.generation__button_one');
  const gbtwo = document.querySelector('.generation__button_two');
  const gbthree = document.querySelector('.generation__button_three');
  const gbfour = document.querySelector('.generation__button_four');
  const genitem = document.querySelectorAll('.generation__item');

  gbone.addEventListener('click', function() {
    if (!gformone.classList.contains("active")) {
      generationbuttons.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.style.maxHeight = null);
      generationforms.forEach(n => gformone.style.maxHeight = gformone.scrollHeight + "px");
      gbone.classList.add("active");
      gformone.classList.add("active");
      genitem.forEach(n => n.classList.remove("animate"));
      scroll.scrollTo(togr);
    }
  })

  gbtwo.addEventListener('click', function() {
    if (!gformtwo.classList.contains("active")) {
      generationbuttons.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.style.maxHeight = null);
      generationforms.forEach(n => gformtwo.style.maxHeight = gformtwo.scrollHeight + "px");
      gbtwo.classList.add("active");
      gformtwo.classList.add("active");
      genitem.forEach(n => n.classList.remove("animate"));
      scroll.scrollTo(togr);
    }
  })

  gbthree.addEventListener('click', function() {
    if (!gformthree.classList.contains("active")) {
      generationbuttons.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.style.maxHeight = null);
      generationforms.forEach(n => gformthree.style.maxHeight = gformthree.scrollHeight + "px");
      gbthree.classList.add("active");
      gformthree.classList.add("active");
      genitem.forEach(n => n.classList.remove("animate"));
      scroll.scrollTo(togr);
    }
  })

  gbfour.addEventListener('click', function() {
    if (!gformfour.classList.contains("active")) {
      generationbuttons.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.classList.remove('active'));
      generationforms.forEach(n => n.style.maxHeight = null);
      generationforms.forEach(n => gformfour.style.maxHeight = gformfour.scrollHeight + "px");
      gbfour.classList.add("active");
      gformfour.classList.add("active");
      genitem.forEach(n => n.classList.remove("animate"));
      scroll.scrollTo(togr);
    }
  })
  // END step

  // START validate generation__form_one
  gformone.addEventListener('submit', e => {
    scroll.scrollTo(togr);
    e.preventDefault();
    checkgoInputs();
  });
  function checkgoInputs() {
    const gousernameValue = gousername.value.trim();
    const gophoneValue = gophone.value.trim();
    const goemailValue = goemail.value.trim();
    const gotgValue = gotg.value.trim();
    const goorgValue = goorg.value.trim();
    const googrnValue = googrn.value.trim();
    const goinnValue = goinn.value.trim();
    const gokppValue = gokpp.value.trim();
    const goaddressValue = goaddress.value.trim();
    const gookpoValue = gookpo.value.trim();
    const gookvedValue = gookved.value.trim();
    const goorganizationValue = goorganization.value.trim();
    const gocorrespondentValue = gocorrespondent.value.trim();
    const gobikValue = gobik.value.trim();

    if(gousernameValue !== '' && gousernameValue.length >= gousernameMin && gousernameValue.length <= gousernameMax) {
      setSuccessForGeneration(gousername);
    } else {
      setErrorForGeneration(gousername);
    }

    if(gophoneValue !== '' && gophoneValue.length >= gophoneMin && gophoneValue.length <= gophoneMax) {
      setSuccessForGeneration(gophone);
    } else {
      setErrorForGeneration(gophone);
    }

    if(!isEmailGValid(goemailValue)) {
      setErrorForGeneration(goemail);
      scroll.scrollTo(togr);
    } else if (goemailValue !== '' && goemailValue.length >= goemailMin && goemailValue.length <= goemailMax) {
      setSuccessForGeneration(goemail);
    } else {
      setErrorForGeneration(goemail);
    }

    if(gotgValue.length >= gotgMin && gotgValue.length <= gotgMax) {
      setSuccessForGeneration(gotg);
    } else {
      setErrorForGeneration(gotg);
    }

    if(goorgValue !== '' && goorgValue.length >= goorgMin && goorgValue.length <= goorgMax) {
      setSuccessForGeneration(goorg);
    } else {
      setErrorForGeneration(goorg);
    }

    if(googrnValue !== '' && googrnValue.length >= googrnMin && googrnValue.length <= googrnMax) {
      setSuccessForGeneration(googrn);
    } else {
      setErrorForGeneration(googrn);
    }

    if(goinnValue !== '' && goinnValue.length >= goinnMin && goinnValue.length <= goinnMax) {
      setSuccessForGeneration(goinn);
    } else {
      setErrorForGeneration(goinn);
    }

    if(gokppValue !== '' && gokppValue.length >= gokppMin && gokppValue.length <= gokppMax) {
      setSuccessForGeneration(gokpp);
    } else {
      setErrorForGeneration(gokpp);
    }

    if(goaddressValue !== '' && goaddressValue.length >= goaddressMin && goaddressValue.length <= goaddressMax) {
      setSuccessForGeneration(goaddress);
    } else {
      setErrorForGeneration(goaddress);
    }

    if(gookpoValue !== '' && gookpoValue.length >= gookpoMin && gookpoValue.length <= gookpoMax) {
      setSuccessForGeneration(gookpo);
    } else {
      setErrorForGeneration(gookpo);
    }

    if(gookvedValue !== '' && gookvedValue.length >= gookvedMin && gookvedValue.length <= gookvedMax) {
      setSuccessForGeneration(gookved);
    } else {
      setErrorForGeneration(gookved);
    }

    if(goorganizationValue !== '' && goorganizationValue.length >= goorganizationMin && goorganizationValue.length <= goorganizationMax) {
      setSuccessForGeneration(goorganization);
    } else {
      setErrorForGeneration(goorganization);
    }

    if(gocorrespondentValue !== '' && gocorrespondentValue.length >= gocorrespondentMin && gocorrespondentValue.length <= gocorrespondentMax) {
      setSuccessForGeneration(gocorrespondent);
    } else {
      setErrorForGeneration(gocorrespondent);
    }

    if(gobikValue !== '' && gobikValue.length >= gobikMin && gobikValue.length <= gobikMax) {
      setSuccessForGeneration(gobik);
    } else {
      setErrorForGeneration(gobik);
    }

    if(!isEmailGValid(goemailValue)){
      scroll.scrollTo(togr);
    } else if (
      gousernameValue !== '' &&
      gousernameValue.length >= gousernameMin &&
      gousernameValue.length <= gousernameMax &&
      gophoneValue !== '' &&
      gophoneValue.length >= gophoneMin &&
      gophoneValue.length <= gophoneMax &&
      goemailValue !== '' &&
      goemailValue.length >= goemailMin &&
      goemailValue.length <= goemailMax &&
      gotgValue.length >= gotgMin &&
      gotgValue.length <= gotgMax &&
      goorgValue !== '' &&
      goorgValue.length >= goorgMin &&
      goorgValue.length <= goorgMax &&
      googrnValue !== '' &&
      googrnValue.length >= googrnMin &&
      googrnValue.length <= googrnMax &&
      goinnValue !== '' &&
      goinnValue.length >= goinnMin &&
      goinnValue.length <= goinnMax &&
      gokppValue !== '' &&
      gokppValue.length >= gokppMin &&
      gokppValue.length <= gokppMax &&
      goaddressValue !== '' &&
      goaddressValue.length >= goaddressMin &&
      goaddressValue.length <= goaddressMax &&
      gookpoValue !== '' &&
      gookpoValue.length >= gookpoMin &&
      gookpoValue.length <= gookpoMax &&
      gookvedValue !== '' &&
      gookvedValue.length >= gookvedMin &&
      gookvedValue.length <= gookvedMax &&
      goorganizationValue !== '' &&
      goorganizationValue.length >= goorganizationMin &&
      goorganizationValue.length <= goorganizationMax &&
      gocorrespondentValue !== '' &&
      gocorrespondentValue.length >= gocorrespondentMin &&
      gocorrespondentValue.length <= gocorrespondentMax &&
      gobikValue !== '' &&
      gobikValue.length >= gobikMin &&
      gobikValue.length <= gobikMax
    ) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: gousernameValue,
          two: gophoneValue,
          three: goemailValue,
          four: gotgValue,
          five: goorgValue,
          six: googrnValue,
          seven: goinnValue,
          eight: gokppValue,
          nine: goaddressValue,
          ten: gookpoValue,
          eleven: gookvedValue,
          twelve: goorganizationValue,
          thirteen: gocorrespondentValue,
          fourteen: gobikValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  }
  // END validate generation__form_one

  // START validate generation__form_two
  gformtwo.addEventListener('submit', e => {
    scroll.scrollTo(togr);
    e.preventDefault();
    checkgtInputs();
  });
  function checkgtInputs() {
    const gtusernameValue = gtusername.value.trim();
    const gtphoneValue = gtphone.value.trim();
    const gtemailValue = gtemail.value.trim();
    const gttgValue = gttg.value.trim();
    const gtorgValue = gtorg.value.trim();
    const gtogrnValue = gtogrn.value.trim();
    const gtinnValue = gtinn.value.trim();
    const gtkppValue = gtkpp.value.trim();
    const gtaddressValue = gtaddress.value.trim();
    const gtokpoValue = gtokpo.value.trim();
    const gtokvedValue = gtokved.value.trim();
    const gtorganizationValue = gtorganization.value.trim();
    const gtcorrespondentValue = gtcorrespondent.value.trim();
    const gtbikValue = gtbik.value.trim();

    if(gtusernameValue !== '' && gtusernameValue.length >= gtusernameMin && gtusernameValue.length <= gtusernameMax) {
      setSuccessForGeneration(gtusername);
    } else {
      setErrorForGeneration(gtusername);
    }

    if(gtphoneValue !== '' && gtphoneValue.length >= gtphoneMin && gtphoneValue.length <= gtphoneMax) {
      setSuccessForGeneration(gtphone);
    } else {
      setErrorForGeneration(gtphone);
    }

    if(!isEmailGValid(gtemailValue)) {
      setErrorForGeneration(gtemail);
      scroll.scrollTo(togr);
    } else if (gtemailValue !== '' && gtemailValue.length >= gtemailMin && gtemailValue.length <= gtemailMax) {
      setSuccessForGeneration(gtemail);
    } else {
      setErrorForGeneration(gtemail);
    }

    if(gttgValue.length >= gttgMin && gttgValue.length <= gttgMax) {
      setSuccessForGeneration(gttg);
    } else {
      setErrorForGeneration(gttg);
    }

    if(gtorgValue !== '' && gtorgValue.length >= gtorgMin && gtorgValue.length <= gtorgMax) {
      setSuccessForGeneration(gtorg);
    } else {
      setErrorForGeneration(gtorg);
    }

    if(gtogrnValue !== '' && gtogrnValue.length >= gtogrnMin && gtogrnValue.length <= gtogrnMax) {
      setSuccessForGeneration(gtogrn);
    } else {
      setErrorForGeneration(gtogrn);
    }

    if(gtinnValue !== '' && gtinnValue.length >= gtinnMin && gtinnValue.length <= gtinnMax) {
      setSuccessForGeneration(gtinn);
    } else {
      setErrorForGeneration(gtinn);
    }

    if(gtkppValue !== '' && gtkppValue.length >= gtkppMin && gtkppValue.length <= gtkppMax) {
      setSuccessForGeneration(gtkpp);
    } else {
      setErrorForGeneration(gtkpp);
    }

    if(gtaddressValue !== '' && gtaddressValue.length >= gtaddressMin && gtaddressValue.length <= gtaddressMax) {
      setSuccessForGeneration(gtaddress);
    } else {
      setErrorForGeneration(gtaddress);
    }

    if(gtokpoValue !== '' && gtokpoValue.length >= gtokpoMin && gtokpoValue.length <= gtokpoMax) {
      setSuccessForGeneration(gtokpo);
    } else {
      setErrorForGeneration(gtokpo);
    }

    if(gtokvedValue !== '' && gtokvedValue.length >= gtokvedMin && gtokvedValue.length <= gtokvedMax) {
      setSuccessForGeneration(gtokved);
    } else {
      setErrorForGeneration(gtokved);
    }

    if(gtorganizationValue !== '' && gtorganizationValue.length >= gtorganizationMin && gtorganizationValue.length <= gtorganizationMax) {
      setSuccessForGeneration(gtorganization);
    } else {
      setErrorForGeneration(gtorganization);
    }

    if(gtcorrespondentValue !== '' && gtcorrespondentValue.length >= gtcorrespondentMin && gtcorrespondentValue.length <= gtcorrespondentMax) {
      setSuccessForGeneration(gtcorrespondent);
    } else {
      setErrorForGeneration(gtcorrespondent);
    }

    if(gtbikValue !== '' && gtbikValue.length >= gtbikMin && gtbikValue.length <= gtbikMax) {
      setSuccessForGeneration(gtbik);
    } else {
      setErrorForGeneration(gtbik);
    }

    if(!isEmailGValid(gtemailValue)){
      scroll.scrollTo(togr);
    } else if (
      gtusernameValue !== '' &&
      gtusernameValue.length >= gtusernameMin &&
      gtusernameValue.length <= gtusernameMax &&
      gtphoneValue !== '' &&
      gtphoneValue.length >= gtphoneMin &&
      gtphoneValue.length <= gtphoneMax &&
      gtemailValue !== '' &&
      gtemailValue.length >= gtemailMin &&
      gtemailValue.length <= gtemailMax &&
      gttgValue.length >= gttgMin &&
      gttgValue.length <= gttgMax &&
      gtorgValue !== '' &&
      gtorgValue.length >= gtorgMin &&
      gtorgValue.length <= gtorgMax &&
      gtogrnValue !== '' &&
      gtogrnValue.length >= gtogrnMin &&
      gtogrnValue.length <= gtogrnMax &&
      gtinnValue !== '' &&
      gtinnValue.length >= gtinnMin &&
      gtinnValue.length <= gtinnMax &&
      gtkppValue !== '' &&
      gtkppValue.length >= gtkppMin &&
      gtkppValue.length <= gtkppMax &&
      gtaddressValue !== '' &&
      gtaddressValue.length >= gtaddressMin &&
      gtaddressValue.length <= gtaddressMax &&
      gtokpoValue !== '' &&
      gtokpoValue.length >= gtokpoMin &&
      gtokpoValue.length <= gtokpoMax &&
      gtokvedValue !== '' &&
      gtokvedValue.length >= gtokvedMin &&
      gtokvedValue.length <= gtokvedMax &&
      gtorganizationValue !== '' &&
      gtorganizationValue.length >= gtorganizationMin &&
      gtorganizationValue.length <= gtorganizationMax &&
      gtcorrespondentValue !== '' &&
      gtcorrespondentValue.length >= gtcorrespondentMin &&
      gtcorrespondentValue.length <= gtcorrespondentMax &&
      gtbikValue !== '' &&
      gtbikValue.length >= gtbikMin &&
      gtbikValue.length <= gtbikMax
    ) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: gtusernameValue,
          two: gtphoneValue,
          three: gtemailValue,
          four: gttgValue,
          five: gtorgValue,
          six: gtogrnValue,
          seven: gtinnValue,
          eight: gtkppValue,
          nine: gtaddressValue,
          ten: gtokpoValue,
          eleven: gtokvedValue,
          twelve: gtorganizationValue,
          thirteen: gtcorrespondentValue,
          fourteen: gtbikValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  }
  // END validate generation__form_two

  // START validate generation__form_three
  gformthree.addEventListener('submit', e => {
    scroll.scrollTo(togr);
    e.preventDefault();
    checkgthInputs();
  });
  
  function checkgthInputs() {
    const gthusernameValue = gthusername.value.trim();
    const gthphoneValue = gthphone.value.trim();
    const gthemailValue = gthemail.value.trim();
    const gthtgValue = gthtg.value.trim();
    const gthorgValue = gthorg.value.trim();
    const gthogrnValue = gthogrn.value.trim();
    const gthinnValue = gthinn.value.trim();
    const gthkppValue = gthkpp.value.trim();
    const gthaddressValue = gthaddress.value.trim();
    const gthokpoValue = gthokpo.value.trim();
    const gthokvedValue = gthokved.value.trim();
    const gthorganizationValue = gthorganization.value.trim();
    const gthcorrespondentValue = gthcorrespondent.value.trim();
    const gthbikValue = gthbik.value.trim();
    const gthpriceValue = gthprice.value.trim();

    if(gthusernameValue !== '' && gthusernameValue.length >= gthusernameMin && gthusernameValue.length <= gthusernameMax) {
      setSuccessForGeneration(gthusername);
    } else {
      setErrorForGeneration(gthusername);
    }

    if(gthphoneValue !== '' && gthphoneValue.length >= gthphoneMin && gthphoneValue.length <= gthphoneMax) {
      setSuccessForGeneration(gthphone);
    } else {
      setErrorForGeneration(gthphone);
    }

    if(!isEmailGValid(gthemailValue)) {
      setErrorForGeneration(gthemail);
      scroll.scrollTo(togr);
    } else if (gthemailValue !== '' && gthemailValue.length >= gthemailMin && gthemailValue.length <= gthemailMax) {
      setSuccessForGeneration(gthemail);
    } else {
      setErrorForGeneration(gthemail);
    }

    if(gthtgValue.length >= gthtgMin && gthtgValue.length <= gthtgMax) {
      setSuccessForGeneration(gthtg);
    } else {
      setErrorForGeneration(gthtg);
    }

    if(gthorgValue !== '' && gthorgValue.length >= gthorgMin && gthorgValue.length <= gthorgMax) {
      setSuccessForGeneration(gthorg);
    } else {
      setErrorForGeneration(gthorg);
    }

    if(gthogrnValue !== '' && gthogrnValue.length >= gthogrnMin && gthogrnValue.length <= gthogrnMax) {
      setSuccessForGeneration(gthogrn);
    } else {
      setErrorForGeneration(gthogrn);
    }

    if(gthinnValue !== '' && gthinnValue.length >= gthinnMin && gthinnValue.length <= gthinnMax) {
      setSuccessForGeneration(gthinn);
    } else {
      setErrorForGeneration(gthinn);
    }

    if(gthkppValue !== '' && gthkppValue.length >= gthkppMin && gthkppValue.length <= gthkppMax) {
      setSuccessForGeneration(gthkpp);
    } else {
      setErrorForGeneration(gthkpp);
    }

    if(gthaddressValue !== '' && gthaddressValue.length >= gthaddressMin && gthaddressValue.length <= gthaddressMax) {
      setSuccessForGeneration(gthaddress);
    } else {
      setErrorForGeneration(gthaddress);
    }

    if(gthokpoValue !== '' && gthokpoValue.length >= gthokpoMin && gthokpoValue.length <= gthokpoMax) {
      setSuccessForGeneration(gthokpo);
    } else {
      setErrorForGeneration(gthokpo);
    }

    if(gthokvedValue !== '' && gthokvedValue.length >= gthokvedMin && gthokvedValue.length <= gthokvedMax) {
      setSuccessForGeneration(gthokved);
    } else {
      setErrorForGeneration(gthokved);
    }

    if(gthorganizationValue !== '' && gthorganizationValue.length >= gthorganizationMin && gthorganizationValue.length <= gthorganizationMax) {
      setSuccessForGeneration(gthorganization);
    } else {
      setErrorForGeneration(gthorganization);
    }

    if(gthcorrespondentValue !== '' && gthcorrespondentValue.length >= gthcorrespondentMin && gthcorrespondentValue.length <= gthcorrespondentMax) {
      setSuccessForGeneration(gthcorrespondent);
    } else {
      setErrorForGeneration(gthcorrespondent);
    }

    if(gthbikValue !== '' && gthbikValue.length >= gthbikMin && gthbikValue.length <= gthbikMax) {
      setSuccessForGeneration(gthbik);
    } else {
      setErrorForGeneration(gthbik);
    }

    if(gthpriceValue !== '') {
      setGSelectSuccessFor(gthprice);
    } else {
      setGSelectErrorFor(gthprice);
    }

    if(!isEmailGValid(gthemailValue)){
      scroll.scrollTo(togr);
    } else if (
      gthusernameValue !== '' &&
      gthusernameValue.length >= gthusernameMin &&
      gthusernameValue.length <= gthusernameMax &&
      gthphoneValue !== '' &&
      gthphoneValue.length >= gthphoneMin &&
      gthphoneValue.length <= gthphoneMax &&
      gthemailValue !== '' &&
      gthemailValue.length >= gthemailMin &&
      gthemailValue.length <= gthemailMax &&
      gthtgValue.length >= gthtgMin &&
      gthtgValue.length <= gthtgMax &&
      gthorgValue !== '' &&
      gthorgValue.length >= gthorgMin &&
      gthorgValue.length <= gthorgMax &&
      gthogrnValue !== '' &&
      gthogrnValue.length >= gthogrnMin &&
      gthogrnValue.length <= gthogrnMax &&
      gthinnValue !== '' &&
      gthinnValue.length >= gthinnMin &&
      gthinnValue.length <= gthinnMax &&
      gthkppValue !== '' &&
      gthkppValue.length >= gthkppMin &&
      gthkppValue.length <= gthkppMax &&
      gthaddressValue !== '' &&
      gthaddressValue.length >= gthaddressMin &&
      gthaddressValue.length <= gthaddressMax &&
      gthokpoValue !== '' &&
      gthokpoValue.length >= gthokpoMin &&
      gthokpoValue.length <= gthokpoMax &&
      gthokvedValue !== '' &&
      gthokvedValue.length >= gthokvedMin &&
      gthokvedValue.length <= gthokvedMax &&
      gthorganizationValue !== '' &&
      gthorganizationValue.length >= gthorganizationMin &&
      gthorganizationValue.length <= gthorganizationMax &&
      gthcorrespondentValue !== '' &&
      gthcorrespondentValue.length >= gthcorrespondentMin &&
      gthcorrespondentValue.length <= gthcorrespondentMax &&
      gthbikValue !== '' &&
      gthbikValue.length >= gthbikMin &&
      gthbikValue.length <= gthbikMax && 
      gthpriceValue !== ''
    ) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: gthusernameValue,
          two: gthphoneValue,
          three: gthemailValue,
          four: gthtgValue,
          five: gthorgValue,
          six: gthogrnValue,
          seven: gthinnValue,
          eight: gthkppValue,
          nine: gthaddressValue,
          ten: gthokpoValue,
          eleven: gthokvedValue,
          twelve: gthorganizationValue,
          thirteen: gthcorrespondentValue,
          fourteen: gthbikValue,
          fiveteen: gthpriceValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  }

  function GenerationAdd() {
    var generationadded = document.getElementById("generation__added");
  
    var generationat = document.createElement("div");
    generationat.className = "generation__added_top";
  
    var generationah = document.createElement("h4");
    generationah.className = "generation__added_head";
    generationah.innerHTML = 'Добавление услуги';
    generationat.appendChild(generationah);
    
    var generationr = document.createElement("a");
    generationr.className = "generation__remove";
    generationr.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L12 12M12 12L17 7.00001M12 12L7 7M12 12L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Удалить услугу</span>
    `;
    generationat.appendChild(generationr);
  
    var generationformone = document.createElement("div");
    generationformone.className = "form__control";
    generationformone.innerHTML = `
      <textarea class="form__input" type="text" minl="4" maxl="300" id="text1"></textarea>
      <small class="form__counter"><span class="form__counter_min">0</span> из <span class="form__counter_max">300</span></small>
      <span class="form__pencil">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99376 2.1613L10.8391 5.00662M7.99376 2.1613L1.98697 8.16808C1.57655 8.57851 1.31031 9.11098 1.22822 9.68558L1.00692 11.2347C0.94369 11.6773 1.32307 12.0567 1.76567 11.9935L3.31479 11.7722C3.88939 11.6901 4.42186 11.4238 4.83229 11.0134L10.8391 5.00662M7.99376 2.1613L8.74047 1.41459C9.52152 0.63354 10.7963 0.641985 11.5773 1.42303C12.3584 2.20408 12.3668 3.47886 11.5858 4.25991L10.8391 5.00662" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="form__close">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L6.00001 6M6.00001 6L11 1.00001M6.00001 6L1 1M6.00001 6L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <label class="form__label" for="text1">Название услуги <span>*</span></label>
      <span class="form__bar"></span>
      <span class="form__border"></span>
      <small class="form__error">Введите название услуги</small>
    `;
  
    var generationformtwo = document.createElement("div");
    generationformtwo.className = "form__control";
    generationformtwo.innerHTML = `
      <textarea class="form__input" type="text" minl="4" maxl="300" id="text2"></textarea>
      <small class="form__counter"><span class="form__counter_min">0</span> из <span class="form__counter_max">300</span></small>
      <span class="form__pencil">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99376 2.1613L10.8391 5.00662M7.99376 2.1613L1.98697 8.16808C1.57655 8.57851 1.31031 9.11098 1.22822 9.68558L1.00692 11.2347C0.94369 11.6773 1.32307 12.0567 1.76567 11.9935L3.31479 11.7722C3.88939 11.6901 4.42186 11.4238 4.83229 11.0134L10.8391 5.00662M7.99376 2.1613L8.74047 1.41459C9.52152 0.63354 10.7963 0.641985 11.5773 1.42303C12.3584 2.20408 12.3668 3.47886 11.5858 4.25991L10.8391 5.00662" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="form__close">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L6.00001 6M6.00001 6L11 1.00001M6.00001 6L1 1M6.00001 6L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <label class="form__label" for="text2">Стоимость часа <span>*</span></label>
      <span class="form__bar"></span>
      <span class="form__border"></span>
      <small class="form__error">Введите стоимость часа</small>
    `;
  
    var generationformthree = document.createElement("div");
    generationformthree.className = "form__control";
    generationformthree.innerHTML = `
      <textarea class="form__input" type="text" minl="4" maxl="300" id="text3"></textarea>
      <small class="form__counter"><span class="form__counter_min">0</span> из <span class="form__counter_max">300</span></small>
      <span class="form__pencil">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99376 2.1613L10.8391 5.00662M7.99376 2.1613L1.98697 8.16808C1.57655 8.57851 1.31031 9.11098 1.22822 9.68558L1.00692 11.2347C0.94369 11.6773 1.32307 12.0567 1.76567 11.9935L3.31479 11.7722C3.88939 11.6901 4.42186 11.4238 4.83229 11.0134L10.8391 5.00662M7.99376 2.1613L8.74047 1.41459C9.52152 0.63354 10.7963 0.641985 11.5773 1.42303C12.3584 2.20408 12.3668 3.47886 11.5858 4.25991L10.8391 5.00662" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <span class="form__close">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L6.00001 6M6.00001 6L11 1.00001M6.00001 6L1 1M6.00001 6L11 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <label class="form__label" for="text3">Количество часов <span>*</span></label>
      <span class="form__bar"></span>
      <span class="form__border"></span>
      <small class="form__error">Введите количество часов</small>
    `;
  
    var generationab = document.createElement("div");
    generationab.className = "generation__added_block";
    generationab.appendChild(generationat);
    generationab.appendChild(generationformone);
    generationab.appendChild(generationformtwo);
    generationab.appendChild(generationformthree);
  
    generationadded.appendChild(generationab);
    autosize(document.querySelectorAll('textarea'));
    GenerationRemove();
    const generationformss = document.querySelectorAll(".generation__right .generation__form");
    generationformss.forEach(n => gformthree.style.maxHeight = gformthree.scrollHeight + "px");

    const generationaddedID = document.getElementById("generation__added");
    const gablock = document.querySelectorAll('.generation__added_block');
    if(generationaddedID){
      function onEntry(entry) {entry.forEach(change => {if (change.isIntersecting) {change.target.classList.add('animate');}});};
    
      let gablockopt = {threshold: [0.5]};
      let gablockserv = new IntersectionObserver(onEntry, gablockopt);
      for (let elm of gablock) {gablockserv.observe(elm);}
      [...gablock].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
    }
  }

  function GenerationRemove() {
    const generationremove = document.getElementsByClassName("generation__remove");
    for (i = 0; i < generationremove.length; i++) {
      generationremove[i].onclick = function(e) {
        this.parentElement.parentElement.remove();
      };
    }
  }
  GenerationRemove();
  // END validate generation__form_three
  
  // start validate generation__form_four
  formgeneration.addEventListener('submit', e => {
    scroll.scrollTo(togr);
    e.preventDefault();
    checkgfrInputs();
  });
  function checkgfrInputs() {
    const generationusernameValue = generationusername.value.trim();
    const generationphoneValue = generationphone.value.trim();
    const generationemailValue = generationemail.value.trim();
    const generationbasictermsValue = generationbasicterms.value.trim();
    const generationtargetValue = generationtarget.value.trim();
    const generationknowValue = generationknow.value.trim();
    const generationaudienceValue = generationaudience.value.trim();
    const generationchoiceValue = generationchoice.value.trim();
    const generationlinkValue = generationlink.value.trim();
    const generationtopicsValue = generationtopics.value.trim();
    const generationnotopicsValue = generationnotopics.value.trim();
    const generationpriceValue = generationprice.value.trim();
    const generationimpressionValue = generationimpression.value.trim();
    const generationimportantValue = generationimportant.value.trim();
    const generationlikeValue = generationlike.value.trim();
    const generationproblemsValue = generationproblems.value.trim();
    const generationtriggersValue = generationtriggers.value.trim();
    const generationinfoballValue = generationinfoball.value.trim();
    const generationneedsValue = generationneeds.value.trim();
    const generationbarriersValue = generationbarriers.value.trim();
    const generationstriveValue = generationstrive.value.trim();
    const generationdesignValue = generationdesign.value.trim();
    const generationassociationsValue = generationassociations.value.trim();
    const generationsegmentValue = generationsegment.value.trim();

    if(generationusernameValue !== '' && generationusernameValue.length >= generationusernameMin && generationusernameValue.length <= generationusernameMax) {
      setSuccessForGeneration(generationusername);
    } else {
      setErrorForGeneration(generationusername);
    }

    if(generationphoneValue !== '' && generationphoneValue.length >= generationphoneMin && generationphoneValue.length <= generationphoneMax) {
      setSuccessForGeneration(generationphone);
    } else {
      setErrorForGeneration(generationphone);
    }

    if(!isEmailGValid(generationemailValue)) {
      setErrorForGeneration(generationemail);
      scroll.scrollTo(togr);
    } else if (generationemailValue !== '' && generationemailValue.length >= generationemailMin && generationemailValue.length <= generationemailMax) {
      setSuccessForGeneration(generationemail);
    } else {
      setErrorForGeneration(generationemail);
    }

    if(generationbasictermsValue !== '' && generationbasictermsValue.length >= generationbasictermsMin && generationbasictermsValue.length <= generationbasictermsMax) {
      setSuccessForGeneration(generationbasicterms);
    } else {
      setErrorForGeneration(generationbasicterms);
    }

    if(generationtargetValue !== '' && generationtargetValue.length >= generationtargetMin && generationtargetValue.length <= generationtargetMax) {
      setSuccessForGeneration(generationtarget);
    } else {
      setErrorForGeneration(generationtarget);
    }

    if(generationknowValue !== '' && generationknowValue.length >= generationknowMin && generationknowValue.length <= generationknowMax) {
      setSuccessForGeneration(generationknow);
    } else {
      setErrorForGeneration(generationknow);
    }

    if(generationaudienceValue !== '' && generationaudienceValue.length >= generationaudienceMin && generationaudienceValue.length <= generationaudienceMax) {
      setSuccessForGeneration(generationaudience);
    } else {
      setErrorForGeneration(generationaudience);
    }

    if(generationchoiceValue !== '' && generationchoiceValue.length >= generationchoiceMin && generationchoiceValue.length <= generationchoiceMax) {
      setSuccessForGeneration(generationchoice);
    } else {
      setErrorForGeneration(generationchoice);
    }

    if(generationlinkValue !== '' && generationlinkValue.length >= generationlinkMin && generationlinkValue.length <= generationlinkMax) {
      setSuccessForGeneration(generationlink);
    } else {
      setErrorForGeneration(generationlink);
    }

    if(generationtopicsValue !== '' && generationtopicsValue.length >= generationtopicsMin && generationtopicsValue.length <= generationtopicsMax) {
      setSuccessForGeneration(generationtopics);
    } else {
      setErrorForGeneration(generationtopics);
    }

    if(generationnotopicsValue !== '' && generationnotopicsValue.length >= generationnotopicsMin && generationnotopicsValue.length <= generationnotopicsMax) {
      setSuccessForGeneration(generationnotopics);
    } else {
      setErrorForGeneration(generationnotopics);
    }

    if(generationpriceValue !== '' && generationpriceValue.length >= generationpriceMin && generationpriceValue.length <= generationpriceMax) {
      setSuccessForGeneration(generationprice);
    } else {
      setErrorForGeneration(generationprice);
    }

    if(generationimpressionValue !== '' && generationimpressionValue.length >= generationimpressionMin && generationimpressionValue.length <= generationimpressionMax) {
      setSuccessForGeneration(generationimpression);
    } else {
      setErrorForGeneration(generationimpression);
    }

    if(generationimportantValue !== '' && generationimportantValue.length >= generationimportantMin && generationimportantValue.length <= generationimportantMax) {
      setSuccessForGeneration(generationimportant);
    } else {
      setErrorForGeneration(generationimportant);
    }

    if(generationlikeValue !== '' && generationlikeValue.length >= generationlikeMin && generationlikeValue.length <= generationlikeMax) {
      setSuccessForGeneration(generationlike);
    } else {
      setErrorForGeneration(generationlike);
    }

    if(generationproblemsValue !== '' && generationproblemsValue.length >= generationproblemsMin && generationproblemsValue.length <= generationproblemsMax) {
      setSuccessForGeneration(generationproblems);
    } else {
      setErrorForGeneration(generationproblems);
    }

    if(generationtriggersValue !== '' && generationtriggersValue.length >= generationtriggersMin && generationtriggersValue.length <= generationtriggersMax) {
      setSuccessForGeneration(generationtriggers);
    } else {
      setErrorForGeneration(generationtriggers);
    }

    if(generationinfoballValue !== '' && generationinfoballValue.length >= generationinfoballMin && generationinfoballValue.length <= generationinfoballMax) {
      setSuccessForGeneration(generationinfoball);
    } else {
      setErrorForGeneration(generationinfoball);
    }

    if(generationneedsValue !== '' && generationneedsValue.length >= generationneedsMin && generationneedsValue.length <= generationneedsMax) {
      setSuccessForGeneration(generationneeds);
    } else {
      setErrorForGeneration(generationneeds);
    }

    if(generationbarriersValue !== '' && generationbarriersValue.length >= generationbarriersMin && generationbarriersValue.length <= generationbarriersMax) {
      setSuccessForGeneration(generationbarriers);
    } else {
      setErrorForGeneration(generationbarriers);
    }

    if(generationstriveValue !== '' && generationstriveValue.length >= generationstriveMin && generationstriveValue.length <= generationstriveMax) {
      setSuccessForGeneration(generationstrive);
    } else {
      setErrorForGeneration(generationstrive);
    }

    if(generationdesignValue !== '' && generationdesignValue.length >= generationdesignMin && generationdesignValue.length <= generationdesignMax) {
      setSuccessForGeneration(generationdesign);
    } else {
      setErrorForGeneration(generationdesign);
    }

    if(generationassociationsValue !== '' && generationassociationsValue.length >= generationassociationsMin && generationassociationsValue.length <= generationassociationsMax) {
      setSuccessForGeneration(generationassociations);
    } else {
      setErrorForGeneration(generationassociations);
    }

    if(generationsegmentValue !== '' && generationsegmentValue.length >= generationsegmentMin && generationsegmentValue.length <= generationsegmentMax) {
      setSuccessForGeneration(generationsegment);
    } else {
      setErrorForGeneration(generationsegment);
    }

    if(
      !isEmailGValid(generationemailValue)
    ) {
      scroll.scrollTo(togr);
    } else if (
      generationusernameValue !== '' &&
      generationusernameValue.length >= generationusernameMin &&
      generationusernameValue.length <= generationusernameMax &&
      generationphoneValue !== '' &&
      generationphoneValue.length >= generationphoneMin &&
      generationphoneValue.length <= generationphoneMax &&
      generationemailValue !== '' &&
      generationemailValue.length >= generationemailMin &&
      generationemailValue.length <= generationemailMax &&

      generationbasictermsValue !== '' &&
      generationbasictermsValue.length >= generationbasictermsMin &&
      generationbasictermsValue.length <= generationbasictermsMax &&
      generationtargetValue !== '' &&
      generationtargetValue.length >= generationtargetMin &&
      generationtargetValue.length <= generationtargetMax &&
      generationknowValue !== '' &&
      generationknowValue.length >= generationknowMin &&
      generationknowValue.length <= generationknowMax &&
      generationaudienceValue !== '' &&
      generationaudienceValue.length >= generationaudienceMin &&
      generationaudienceValue.length <= generationaudienceMax &&
      generationchoiceValue !== '' &&
      generationchoiceValue.length >= generationchoiceMin &&
      generationchoiceValue.length <= generationchoiceMax &&

      generationlinkValue !== '' &&
      generationlinkValue.length >= generationlinkMin &&
      generationlinkValue.length <= generationlinkMax &&
      generationtopicsValue !== '' &&
      generationtopicsValue.length >= generationtopicsMin &&
      generationtopicsValue.length <= generationtopicsMax &&
      generationnotopicsValue !== '' &&
      generationnotopicsValue.length >= generationnotopicsMin &&
      generationnotopicsValue.length <= generationnotopicsMax &&
      generationpriceValue !== '' &&
      generationpriceValue.length >= generationpriceMin &&
      generationpriceValue.length <= generationpriceMax &&
      generationimpressionValue !== '' &&
      generationimpressionValue.length >= generationimpressionMin &&
      generationimpressionValue.length <= generationimpressionMax &&
      generationimportantValue !== '' &&
      generationimportantValue.length >= generationimportantMin &&
      generationimportantValue.length <= generationimportantMax &&
      generationlikeValue !== '' &&
      generationlikeValue.length >= generationlikeMin &&
      generationlikeValue.length <= generationlikeMax &&
      
      generationproblemsValue !== '' &&
      generationproblemsValue.length >= generationproblemsMin &&
      generationproblemsValue.length <= generationproblemsMax &&
      generationtriggersValue !== '' &&
      generationtriggersValue.length >= generationtriggersMin &&
      generationtriggersValue.length <= generationtriggersMax &&
      generationinfoballValue !== '' &&
      generationinfoballValue.length >= generationinfoballMin &&
      generationinfoballValue.length <= generationinfoballMax &&
      generationneedsValue !== '' &&
      generationneedsValue.length >= generationneedsMin &&
      generationneedsValue.length <= generationneedsMax &&
      generationbarriersValue !== '' &&
      generationbarriersValue.length >= generationbarriersMin &&
      generationbarriersValue.length <= generationbarriersMax &&
      generationstriveValue !== '' &&
      generationstriveValue.length >= generationstriveMin &&
      generationstriveValue.length <= generationstriveMax &&

      generationdesignValue !== '' &&
      generationdesignValue.length >= generationdesignMin &&
      generationdesignValue.length <= generationdesignMax &&
      generationassociationsValue !== '' &&
      generationassociationsValue.length >= generationassociationsMin &&
      generationassociationsValue.length <= generationassociationsMax &&
      generationsegmentValue !== '' &&
      generationsegmentValue.length >= generationsegmentMin &&
      generationsegmentValue.length <= generationsegmentMax
    ) {
      formgeneration.classList.add("hidden");
      document.getElementById('form__successfully_form__generation').classList.add("active");
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: generationusernameValue,
          two: generationphoneValue,
          three: generationemailValue,

          four: generationbasictermsValue,
          five: generationtargetValue,
          six: generationknowValue,
          seven: generationaudienceValue,
          eight: generationchoiceValue,

          nine: generationlinkValue,
          ten: generationtopicsValue,
          eleven: generationnotopicsValue,
          twelve: generationpriceValue,
          thirteen: generationimpressionValue,
          fourteen: generationimportantValue,
          fifteen: generationlikeValue,

          sixteen: generationproblemsValue,
          seventeen: generationtriggersValue,
          eighteen: generationinfoballValue,
          nineteen: generationneedsValue,
          twenty: generationbarriersValue,
          twentyone: generationstriveValue,
          
          twentytwo: generationdesignValue,
          twentythree: generationassociationsValue,
          twentyfour: generationsegmentValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  }
  // end validate generation__form_four
}