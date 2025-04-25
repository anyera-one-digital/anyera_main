const briefing = document.querySelector('.briefing');
if(!briefing){} else {
  var getMeTo = document.getElementById("top");
  const bctype = document.getElementById('briefing__check_type');
  const bcsum = document.getElementById('briefing__check_sum');
  bctype.value = document.querySelector(".briefing__checks_type").children[1].children[0].textContent;
  bcsum.value = document.querySelector(".briefing__checks_type").children[1].children[0].textContent;
  const bformone = document.getElementById('briefing__form_one');
  const bstepone = document.querySelector('.briefing__step_one');
  const bstepsone = document.querySelector('.briefing__steps_one');
  const busername = document.getElementById('briefing__username');
  const bphone = document.getElementById('briefing__phone');
  const bemail = document.getElementById('briefing__email');
  const bformtwo = document.getElementById('briefing__form_two');
  const bsteptwo = document.querySelector('.briefing__step_two');
  const bstepstwo = document.querySelector('.briefing__steps_two');
  const bbuttontwo = document.querySelector('.briefing__button_two');
  const bbasicterms = document.getElementById('briefing__basicterms');
  const btarget = document.getElementById('briefing__target');
  const bknow = document.getElementById('briefing__know');
  const baudience = document.getElementById('briefing__audience');
  const bchoice = document.getElementById('briefing__choice');
  const bformthree = document.getElementById('briefing__form_three');
  const bstepthree = document.querySelector('.briefing__step_three');
  const bstepsthree = document.querySelector('.briefing__steps_three');
  const bbuttonthree = document.querySelector('.briefing__button_three');
  const blink = document.getElementById('briefing__link');
  const btopics = document.getElementById('briefing__topics');
  const bnotopics = document.getElementById('briefing__notopics');
  const bprice = document.getElementById('briefing__price');
  const bimpression = document.getElementById('briefing__impression');
  const bimportant = document.getElementById('briefing__important');
  const blike = document.getElementById('briefing__like');
  const bformfour = document.getElementById('briefing__form_four');
  const bstepfour = document.querySelector('.briefing__step_four');
  const bstepsfour = document.querySelector('.briefing__steps_four');
  const bbuttonfour = document.querySelector('.briefing__button_four');
  const bproblems = document.getElementById('briefing__problems');
  const btriggers = document.getElementById('briefing__triggers');
  const binfoball = document.getElementById('briefing__infoball');
  const bneeds = document.getElementById('briefing__needs');
  const bbarriers = document.getElementById('briefing__barriers');
  const bstrive = document.getElementById('briefing__strive');
  const bformfive = document.getElementById('briefing__form_five');
  const bstepfive = document.querySelector('.briefing__step_five');
  const bstepsfive = document.querySelector('.briefing__steps_five');
  const bbuttonfive = document.querySelector('.briefing__button_five');
  const bdesign = document.getElementById('briefing__design');
  const bassociations = document.getElementById('briefing__associations');
  const bsegment = document.getElementById('briefing__segment');
  const bformend = document.querySelector('.briefing__form_end');
  const bstepsend = document.querySelector('.briefing__steps_end');
  const totop = document.querySelector('#top');
  const briefinghome = document.querySelector('.briefing__home');

  // start Min Max
  const busernameMin = busername.getAttribute('minl');
  const busernameMax = busername.getAttribute('maxl');
  const bphoneMin = bphone.getAttribute('minl');
  const bphoneMax = bphone.getAttribute('maxl');
  const bemailMin = bemail.getAttribute('minl');
  const bemailMax = bemail.getAttribute('maxl');
  const bbasictermsMin = bbasicterms.getAttribute('minl');
  const bbasictermsMax = bbasicterms.getAttribute('maxl');
  const btargetMin = btarget.getAttribute('minl');
  const btargetMax = btarget.getAttribute('maxl');
  const bknowMin = bknow.getAttribute('minl');
  const bknowMax = bknow.getAttribute('maxl');
  const baudienceMin = baudience.getAttribute('minl');
  const baudienceMax = baudience.getAttribute('maxl');
  const bchoiceMin = bchoice.getAttribute('minl');
  const bchoiceMax = bchoice.getAttribute('maxl');
  const blinkMin = blink.getAttribute('minl');
  const blinkMax = blink.getAttribute('maxl');
  const btopicsMin = btopics.getAttribute('minl');
  const btopicsMax = btopics.getAttribute('maxl');
  const bnotopicsMin = bnotopics.getAttribute('minl');
  const bnotopicsMax = bnotopics.getAttribute('maxl');
  const bpriceMin = bprice.getAttribute('minl');
  const bpriceMax = bprice.getAttribute('maxl');
  const bimpressionMin = bimpression.getAttribute('minl');
  const bimpressionMax = bimpression.getAttribute('maxl');
  const bimportantMin = bimportant.getAttribute('minl');
  const bimportantMax = bimportant.getAttribute('maxl');
  const blikeMin = blike.getAttribute('minl');
  const blikeMax = blike.getAttribute('maxl');
  const bproblemsMin = bproblems.getAttribute('minl');
  const bproblemsMax = bproblems.getAttribute('maxl');
  const btriggersMin = btriggers.getAttribute('minl');
  const btriggersMax = btriggers.getAttribute('maxl');
  const binfoballMin = binfoball.getAttribute('minl');
  const binfoballMax = binfoball.getAttribute('maxl');
  const bneedsMin = bneeds.getAttribute('minl');
  const bneedsMax = bneeds.getAttribute('maxl');
  const bbarriersMin = bbarriers.getAttribute('minl');
  const bbarriersMax = bbarriers.getAttribute('maxl');
  const bstriveMin = bstrive.getAttribute('minl');
  const bstriveMax = bstrive.getAttribute('maxl');
  const bdesignMin = bdesign.getAttribute('minl');
  const bdesignMax = bdesign.getAttribute('maxl');
  const bassociationsMin = bassociations.getAttribute('minl');
  const bassociationsMax = bassociations.getAttribute('maxl');
  const bsegmentMin = bsegment.getAttribute('minl');
  const bsegmentMax = bsegment.getAttribute('maxl');
  // end Min Max

  // start counter
  const binputs = document.querySelectorAll(".briefing__input");

  for (i = 0; i < binputs.length; i++) {
    binputs[i].addEventListener("input", updateValue);
    binputs[i].nextElementSibling.children[1].textContent = binputs[i].getAttribute('maxl');
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

  bemail.addEventListener('input', function () {
    const bemailValid = bemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isEmailValid(bemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  // end counter
  
  // start maxleight
  busername.oninput = function(){this.value = this.value.substr(0, busernameMax);}
  bphone.oninput = function(){this.value = this.value.substr(0, bphoneMax);}
  bemail.oninput = function(){this.value = this.value.substr(0, bemailMax);}

  bbasicterms.oninput = function(){this.value = this.value.substr(0, bbasictermsMax);}
  btarget.oninput = function(){this.value = this.value.substr(0, btargetMax);}
  bknow.oninput = function(){this.value = this.value.substr(0, bknowMax);}
  baudience.oninput = function(){this.value = this.value.substr(0, baudienceMax);}
  bchoice.oninput = function(){this.value = this.value.substr(0, bchoiceMax);}

  blink.oninput = function(){this.value = this.value.substr(0, blinkMax);}
  btopics.oninput = function(){this.value = this.value.substr(0, btopicsMax);}
  bnotopics.oninput = function(){this.value = this.value.substr(0, bnotopicsMax);}
  bprice.oninput = function(){this.value = this.value.substr(0, bpriceMax);}
  bimpression.oninput = function(){this.value = this.value.substr(0, bimpressionMax);}
  bimportant.oninput = function(){this.value = this.value.substr(0, bimportantMax);}
  blike.oninput = function(){this.value = this.value.substr(0, blikeMax);}

  bproblems.oninput = function(){this.value = this.value.substr(0, bproblemsMax);}
  btriggers.oninput = function(){this.value = this.value.substr(0, btriggersMax);}
  binfoball.oninput = function(){this.value = this.value.substr(0, binfoballMax);}
  bneeds.oninput = function(){this.value = this.value.substr(0, bneedsMax);}
  bbarriers.oninput = function(){this.value = this.value.substr(0, bbarriersMax);}
  bstrive.oninput = function(){this.value = this.value.substr(0, bstriveMax);}

  bdesign.oninput = function(){this.value = this.value.substr(0, bdesignMax);}
  bassociations.oninput = function(){this.value = this.value.substr(0, bassociationsMax);}
  bsegment.oninput = function(){this.value = this.value.substr(0, bsegmentMax);}
  // end maxleight

  // START step
  const briefingform = document.querySelectorAll(".briefing__right .briefing__form");
  const briefingsteps = document.querySelectorAll(".briefing__left .briefing__steps");
  const briefingstep = document.querySelectorAll(".briefing__left .briefing__step");

  function setErrorForBriefing(input) {
    const bformoneControl = input.parentElement;
    const briefingerror = bformoneControl.querySelector('.briefing__error');
    bformoneControl.className = 'briefing__control error';
  }

  function setSuccessForBriefing(input) {
    const bformoneControl = input.parentElement;
    bformoneControl.className = 'briefing__control success';
  }

  [...briefingform].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

  bstepone.addEventListener('click', function() {
    if (!bformone.classList.contains("active") && bstepone.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
      bformone.classList.add("active");
      bstepsone.classList.add("active");
      bstepone.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bsteptwo.addEventListener('click', function() {
    if (!bformtwo.classList.contains("active") && bsteptwo.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepthree.addEventListener('click', function() {
    if (!bformthree.classList.contains("active") && bstepthree.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepfour.addEventListener('click', function() {
    if (!bformfour.classList.contains("active") && bstepfour.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  bstepfive.addEventListener('click', function() {
    if (!bformfive.classList.contains("active") && bstepfive.classList.contains("unlock")) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("border");
      scroll.scrollTo(totop);
    }
  })
  // END step

  // START back
  bbuttontwo.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformone.style.maxHeight = bformone.scrollHeight + "px");
    bformone.classList.add("active");
    bstepsone.classList.add("active");
    bstepone.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonthree.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
    bformtwo.classList.add("active");
    bstepstwo.classList.add("active");
    bsteptwo.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonfour.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
    bformthree.classList.add("active");
    bstepsthree.classList.add("active");
    bstepthree.classList.add("border");
    scroll.scrollTo(totop);
  })
  bbuttonfive.addEventListener('click', function() {
    briefingform.forEach(n => n.classList.remove('active'));
    briefingsteps.forEach(n => n.classList.remove('active'));
    briefingstep.forEach(n => n.classList.remove('border'));
    briefingform.forEach(n => n.style.maxHeight = null);
    briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
    bformfour.classList.add("active");
    bstepsfour.classList.add("active");
    bstepfour.classList.add("border");
    scroll.scrollTo(totop);
  })
  // END back

  // START validate briefing__form_one
  bformone.addEventListener('submit', e => {
    scroll.scrollTo(totop);
    e.preventDefault();
    checkoneInputs();
  });
  function checkoneInputs() {
    const busernameValue = busername.value.trim();
    const bphoneValue = bphone.value.trim();
    const bemailValue = bemail.value.trim();

    if(busernameValue !== '' && busernameValue.length >= busernameMin && busernameValue.length <= busernameMax) {
      setSuccessForBriefing(busername);
      bstepone.classList.remove("error");
    } else {
      setErrorForBriefing(busername);
      bstepone.classList.add("error");
    }

    if(bphoneValue !== '' && bphoneValue.length >= bphoneMin && bphoneValue.length <= bphoneMax) {
      setSuccessForBriefing(bphone);
      bstepone.classList.remove("error");
    } else {
      setErrorForBriefing(bphone);
      bstepone.classList.add("error");
    }

    if(!isEmail(bemailValue)) {
      setErrorForBriefing(bemail);
      bstepone.classList.add("error");
      scroll.scrollTo(totop);
    } else if (bemailValue !== '' && bemailValue.length >= bemailMin && bemailValue.length <= bemailMax) {
      setSuccessForBriefing(bemail);
      bstepone.classList.remove("error");
    } else {
      setErrorForBriefing(bemail);
      bstepone.classList.add("error");
    }

    if(!isEmail(bemailValue)){
      scroll.scrollTo(totop);
    } else if (
      busernameValue !== '' &&
      busernameValue.length >= busernameMin &&
      busernameValue.length <= busernameMax &&
      bphoneValue !== '' &&
      bphoneValue.length >= bphoneMin &&
      bphoneValue.length <= bphoneMax &&
      bemailValue !== '' &&
      bemailValue.length >= bemailMin &&
      bemailValue.length <= bemailMax
    ) {
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformtwo.style.maxHeight = bformtwo.scrollHeight + "px");
      bformtwo.classList.add("active");
      bstepstwo.classList.add("active");
      bsteptwo.classList.add("active");
      bsteptwo.classList.add("unlock");
      bsteptwo.classList.add("border");
    }
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  const bcitype = [...document.querySelectorAll('.briefing__checks_type .briefing__check_input')];
  const bcisum = [...document.querySelectorAll('.briefing__checks_sum .briefing__check_input')];
  const bchecktype = document.querySelectorAll('.briefing__checks_type .briefing__check');
  const bchecksum = document.querySelectorAll('.briefing__checks_sum .briefing__check');

  bcitype.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      for(var i = 0;i < bchecktype.length; i++) {bchecktype[i].classList.remove('active');}
      event.target.closest('.briefing__check').classList.add('active');
      bctype.value = event.target.closest('.briefing__check').children[0].textContent;
    }
  }))

  bcisum.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      for(var i = 0;i < bchecksum.length; i++) {bchecksum[i].classList.remove('active');}
      event.target.closest('.briefing__check').classList.add('active');
      bcsum.value = event.target.closest('.briefing__check').children[0].textContent;
    }
  }))
  // END validate briefing__form_one

  // START validate briefing__form_two
  bformtwo.addEventListener('submit', e => {
    scroll.scrollTo(totop);
    e.preventDefault();
    checktwoInputs();
  });
  function checktwoInputs() {
    const bbasictermsValue = bbasicterms.value.trim();
    const btargetValue = btarget.value.trim();
    const bknowValue = bknow.value.trim();
    const baudienceValue = baudience.value.trim();
    const bchoiceValue = bchoice.value.trim();

    if(bbasictermsValue !== '' && bbasictermsValue.length >= bbasictermsMin && bbasictermsValue.length <= bbasictermsMax) {
      setSuccessForBriefing(bbasicterms);
      bsteptwo.classList.remove("error");
    } else {
      setErrorForBriefing(bbasicterms);
      bsteptwo.classList.add("error");
    }
    if(btargetValue !== '' && btargetValue.length >= btargetMin && btargetValue.length <= btargetMax) {
      setSuccessForBriefing(btarget);
      bsteptwo.classList.remove("error");
    } else {
      setErrorForBriefing(btarget);
      bsteptwo.classList.add("error");
    }
    if(bknowValue !== '' && bknowValue.length >= bknowMin && bknowValue.length <= bknowMax) {
      setSuccessForBriefing(bknow);
      bsteptwo.classList.remove("error");
    } else {
      setErrorForBriefing(bknow);
      bsteptwo.classList.add("error");
    }
    if(baudienceValue !== '' && baudienceValue.length >= baudienceMin && baudienceValue.length <= baudienceMax) {
      setSuccessForBriefing(baudience);
      bsteptwo.classList.remove("error");
    } else {
      setErrorForBriefing(baudience);
      bsteptwo.classList.add("error");
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= bchoiceMin && bchoiceValue.length <= bchoiceMax) {
      setSuccessForBriefing(bchoice);
      bsteptwo.classList.remove("error");
    } else {
      setErrorForBriefing(bchoice);
      bsteptwo.classList.add("error");
    }
    if(
      bbasictermsValue != '' &&
      bbasictermsValue.length >= bbasictermsMin &&
      bbasictermsValue.length <= bbasictermsMax &&
      btargetValue != '' &&
      btargetValue.length >= btargetMin &&
      btargetValue.length <= btargetMax &&
      bknowValue != '' &&
      bknowValue.length >= bknowMin &&
      bknowValue.length <= bknowMax &&
      baudienceValue != '' &&
      baudienceValue.length >= baudienceMin &&
      baudienceValue.length <= baudienceMax &&
      bchoiceValue != '' &&
      bchoiceValue.length >= bchoiceMin &&
      bchoiceValue.length <= bchoiceMax
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformthree.style.maxHeight = bformthree.scrollHeight + "px");
      bformthree.classList.add("active");
      bstepsthree.classList.add("active");
      bstepthree.classList.add("active");
      bstepthree.classList.add("unlock");
      bstepthree.classList.add("border");
    }
  }
  // END validate briefing__form_two

  // START validate briefing__form_three
  bformthree.addEventListener('submit', e => {
    scroll.scrollTo(totop);
    e.preventDefault();
    checkthreeInputs();
  });
  function checkthreeInputs() {
    const blinkValue = blink.value.trim();
    const btopicsValue = btopics.value.trim();
    const bnotopicsValue = bnotopics.value.trim();
    const bpriceValue = bprice.value.trim();
    const bimpressionValue = bimpression.value.trim();
    const bimportantValue = bimportant.value.trim();
    const blikeValue = blike.value.trim();

    if(blinkValue !== '' && blinkValue.length >= blinkMin && blinkValue.length <= blinkMax) {
      setSuccessForBriefing(blink);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(blink);
      bstepthree.classList.add("error");
    }
    if(btopicsValue !== '' && btopicsValue.length >= btopicsMin && btopicsValue.length <= btopicsMax) {
      setSuccessForBriefing(btopics);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(btopics);
      bstepthree.classList.add("error");
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= bnotopicsMin && bnotopicsValue.length <= bnotopicsMax) {
      setSuccessForBriefing(bnotopics);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(bnotopics);
      bstepthree.classList.add("error");
    }
    if(bpriceValue !== '' && bpriceValue.length >= bpriceMin && bpriceValue.length <= bpriceMax) {
      setSuccessForBriefing(bprice);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(bprice);
      bstepthree.classList.add("error");
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= bimpressionMin && bimpressionValue.length <= bimpressionMax) {
      setSuccessForBriefing(bimpression);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(bimpression);
      bstepthree.classList.add("error");
    }
    if(bimportantValue !== '' && bimportantValue.length >= bimportantMin && bimportantValue.length <= bimportantMax) {
      setSuccessForBriefing(bimportant);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(bimportant);
      bstepthree.classList.add("error");
    }
    if(blikeValue !== '' && blikeValue.length >= blikeMin && blikeValue.length <= blikeMax) {
      setSuccessForBriefing(blike);
      bstepthree.classList.remove("error");
    } else {
      setErrorForBriefing(blike);
      bstepthree.classList.add("error");
    }
    if(
      blinkValue != '' &&
      blinkValue.length >= blinkMin &&
      blinkValue.length <= blinkMax &&
      btopicsValue != '' &&
      btopicsValue.length >= btopicsMin &&
      btopicsValue.length <= btopicsMax &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= bnotopicsMin &&
      bnotopicsValue.length <= bnotopicsMax &&
      bpriceValue != '' &&
      bpriceValue.length >= bpriceMin &&
      bpriceValue.length <= bpriceMax &&
      bimpressionValue != '' &&
      bimpressionValue.length >= bimpressionMin &&
      bimpressionValue.length <= bimpressionMax &&
      bimportantValue != '' &&
      bimportantValue.length >= bimportantMin &&
      bimportantValue.length <= bimportantMax &&
      blikeValue != '' &&
      blikeValue.length >= blikeMin &&
      blikeValue.length <= blikeMax
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfour.style.maxHeight = bformfour.scrollHeight + "px");
      bformfour.classList.add("active");
      bstepsfour.classList.add("active");
      bstepfour.classList.add("active");
      bstepfour.classList.add("unlock");
      bstepfour.classList.add("border");
    }
  }
  // END validate briefing__form_three

  // START validate briefing__form_four
  bformfour.addEventListener('submit', e => {
    scroll.scrollTo(totop);
    e.preventDefault();
    checkfourInputs();
  });
  function checkfourInputs() {
    const bproblemsValue = bproblems.value.trim();
    const btriggersValue = btriggers.value.trim();
    const binfoballValue = binfoball.value.trim();
    const bneedsValue = bneeds.value.trim();
    const bbarriersValue = bbarriers.value.trim();
    const bstriveValue = bstrive.value.trim();

    if(bproblemsValue !== '' && bproblemsValue.length >= bproblemsMin && bproblemsValue.length <= bproblemsMax) {
      setSuccessForBriefing(bproblems);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(bproblems);
      bstepfour.classList.add("error");
    }
    if(btriggersValue !== '' && btriggersValue.length >= btriggersMin && btriggersValue.length <= btriggersMax) {
      setSuccessForBriefing(btriggers);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(btriggers);
      bstepfour.classList.add("error");
    }
    if(binfoballValue !== '' && binfoballValue.length >= binfoballMin && binfoballValue.length <= binfoballMax) {
      setSuccessForBriefing(binfoball);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(binfoball);
      bstepfour.classList.add("error");
    }
    if(bneedsValue !== '' && bneedsValue.length >= bneedsMin && bneedsValue.length <= bneedsMax) {
      setSuccessForBriefing(bneeds);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(bneeds);
      bstepfour.classList.add("error");
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= bbarriersMin && bbarriersValue.length <= bbarriersMax) {
      setSuccessForBriefing(bbarriers);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(bbarriers);
      bstepfour.classList.add("error");
    }
    if(bstriveValue !== '' && bstriveValue.length >= bstriveMin && bstriveValue.length <= bstriveMax) {
      setSuccessForBriefing(bstrive);
      bstepfour.classList.remove("error");
    } else {
      setErrorForBriefing(bstrive);
      bstepfour.classList.add("error");
    }
    if(
      bproblemsValue != '' &&
      bproblemsValue.length >= bproblemsMin &&
      bproblemsValue.length <= bproblemsMax &&
      btriggersValue != '' &&
      btriggersValue.length >= btriggersMin &&
      btriggersValue.length <= btriggersMax &&
      binfoballValue != '' &&
      binfoballValue.length >= binfoballMin &&
      binfoballValue.length <= binfoballMax &&
      bneedsValue != '' &&
      bneedsValue.length >= bneedsMin &&
      bneedsValue.length <= bneedsMax &&
      bbarriersValue != '' &&
      bbarriersValue.length >= bbarriersMin &&
      bbarriersValue.length <= bbarriersMax &&
      bstriveValue != '' &&
      bstriveValue.length >= bstriveMin &&
      bstriveValue.length <= bstriveMax
    ){
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      briefingform.forEach(n => bformfive.style.maxHeight = bformfive.scrollHeight + "px");
      bformfive.classList.add("active");
      bstepsfive.classList.add("active");
      bstepfive.classList.add("active");
      bstepfive.classList.add("unlock");
      bstepfive.classList.add("border");
    }
  }
  // END validate briefing__form_four

  // START validate briefing__form_five
  bformfive.addEventListener('submit', e => {
    scroll.scrollTo(totop);
    e.preventDefault();
    checkfiveInputs();
  });
  function checkfiveInputs() {
    const busernameValue = busername.value.trim();
    const bphoneValue = bphone.value.trim();
    const bemailValue = bemail.value.trim();


    if(busernameValue !== '' && busernameValue.length >= busernameMin && busernameValue.length <= busernameMax) {
      setSuccessForBriefing(busername);
    } else {
      setErrorForBriefing(busername);
    }

    if(bphoneValue !== '' && bphoneValue.length >= bphoneMin && bphoneValue.length <= bphoneMax) {
      setSuccessForBriefing(bphone);
    } else {
      setErrorForBriefing(bphone);
    }

    if(!isEmail(bemailValue)) {
      setErrorForBriefing(bemail);
    } else if (bemailValue !== '' && bemailValue.length >= bemailMin && bemailValue.length <= bemailMax) {
      setSuccessForBriefing(bemail);
    } else {
      setErrorForBriefing(bemail);
    }

    if(!isEmail(bemailValue)){
      bstepone.classList.remove("success");
      bstepone.classList.add("error");
    } else if (
      busernameValue != '' &&
      busernameValue.length >= busernameMin &&
      busernameValue.length <= busernameMax &&
      bphoneValue != '' &&
      bphoneValue.length >= bphoneMin &&
      bphoneValue.length <= bphoneMax &&
      bemailValue != '' &&
      bemailValue.length >= bemailMin &&
      bemailValue.length <= bemailMax
    ) {
      bstepone.classList.remove("error");
      bstepone.classList.add("success");
    } else {
      bstepone.classList.remove("success");
      bstepone.classList.add("error");
    }

    const bbasictermsValue = bbasicterms.value.trim();
    const btargetValue = btarget.value.trim();
    const bknowValue = bknow.value.trim();
    const baudienceValue = baudience.value.trim();
    const bchoiceValue = bchoice.value.trim();

    if(bbasictermsValue !== '' && bbasictermsValue.length >= bbasictermsMin && bbasictermsValue.length <= bbasictermsMax) {
      setSuccessForBriefing(bbasicterms);
    } else {
      setErrorForBriefing(bbasicterms);
    }
    if(btargetValue !== '' && btargetValue.length >= btargetMin && btargetValue.length <= btargetMax) {
      setSuccessForBriefing(btarget);
    } else {
      setErrorForBriefing(btarget);
    }
    if(bknowValue !== '' && bknowValue.length >= bknowMin && bknowValue.length <= bknowMax) {
      setSuccessForBriefing(bknow);
    } else {
      setErrorForBriefing(bknow);
    }
    if(baudienceValue !== '' && baudienceValue.length >= baudienceMin && baudienceValue.length <= baudienceMax) {
      setSuccessForBriefing(baudience);
    } else {
      setErrorForBriefing(baudience);
    }
    if(bchoiceValue !== '' && bchoiceValue.length >= bchoiceMin && bchoiceValue.length <= bchoiceMax) {
      setSuccessForBriefing(bchoice);
    } else {
      setErrorForBriefing(bchoice);
    }
    if(
      bbasictermsValue != '' &&
      bbasictermsValue.length >= bbasictermsMin &&
      bbasictermsValue.length <= bbasictermsMax &&
      btargetValue != '' &&
      btargetValue.length >= btargetMin &&
      btargetValue.length <= btargetMax &&
      bknowValue != '' &&
      bknowValue.length >= bknowMin &&
      bknowValue.length <= bknowMax &&
      baudienceValue != '' &&
      baudienceValue.length >= baudienceMin &&
      baudienceValue.length <= baudienceMax &&
      bchoiceValue != '' &&
      bchoiceValue.length >= bchoiceMin &&
      bchoiceValue.length <= bchoiceMax
    ){
      bsteptwo.classList.remove("error");
      bsteptwo.classList.add("success");
    } else {
      bsteptwo.classList.remove("success");
      bsteptwo.classList.add("error");
    }

    const blinkValue = blink.value.trim();
    const btopicsValue = btopics.value.trim();
    const bnotopicsValue = bnotopics.value.trim();
    const bpriceValue = bprice.value.trim();
    const bimpressionValue = bimpression.value.trim();
    const bimportantValue = bimportant.value.trim();
    const blikeValue = blike.value.trim();

    if(blinkValue !== '' && blinkValue.length >= blinkMin && blinkValue.length <= blinkMax) {
      setSuccessForBriefing(blink);
    } else {
      setErrorForBriefing(blink);
    }
    if(btopicsValue !== '' && btopicsValue.length >= btopicsMin && btopicsValue.length <= btopicsMax) {
      setSuccessForBriefing(btopics);
    } else {
      setErrorForBriefing(btopics);
    }
    if(bnotopicsValue !== '' && bnotopicsValue.length >= bnotopicsMin && bnotopicsValue.length <= bnotopicsMax) {
      setSuccessForBriefing(bnotopics);
    } else {
      setErrorForBriefing(bnotopics);
    }
    if(bpriceValue !== '' && bpriceValue.length >= bpriceMin && bpriceValue.length <= bpriceMax) {
      setSuccessForBriefing(bprice);
    } else {
      setErrorForBriefing(bprice);
    }
    if(bimpressionValue !== '' && bimpressionValue.length >= bimpressionMin && bimpressionValue.length <= bimpressionMax) {
      setSuccessForBriefing(bimpression);
    } else {
      setErrorForBriefing(bimpression);
    }
    if(bimportantValue !== '' && bimportantValue.length >= bimportantMin && bimportantValue.length <= bimportantMax) {
      setSuccessForBriefing(bimportant);
    } else {
      setErrorForBriefing(bimportant);
    }
    if(blikeValue !== '' && blikeValue.length >= blikeMin && blikeValue.length <= blikeMax) {
      setSuccessForBriefing(blike);
    } else {
      setErrorForBriefing(blike);
    }
    if(
      blinkValue != '' &&
      blinkValue.length >= blinkMin &&
      blinkValue.length <= blinkMax &&
      btopicsValue != '' &&
      btopicsValue.length >= btopicsMin &&
      btopicsValue.length <= btopicsMax &&
      bnotopicsValue != '' &&
      bnotopicsValue.length >= bnotopicsMin &&
      bnotopicsValue.length <= bnotopicsMax &&
      bpriceValue != '' &&
      bpriceValue.length >= bpriceMin &&
      bpriceValue.length <= bpriceMax &&
      bimpressionValue != '' &&
      bimpressionValue.length >= bimpressionMin &&
      bimpressionValue.length <= bimpressionMax &&
      bimportantValue != '' &&
      bimportantValue.length >= bimportantMin &&
      bimportantValue.length <= bimportantMax &&
      blikeValue != '' &&
      blikeValue.length >= blikeMin &&
      blikeValue.length <= blikeMax
    ){
      bstepthree.classList.remove("error");
      bstepthree.classList.add("success");
    } else {
      bstepthree.classList.remove("success");
      bstepthree.classList.add("error");
    }

    const bproblemsValue = bproblems.value.trim();
    const btriggersValue = btriggers.value.trim();
    const binfoballValue = binfoball.value.trim();
    const bneedsValue = bneeds.value.trim();
    const bbarriersValue = bbarriers.value.trim();
    const bstriveValue = bstrive.value.trim();

    if(bproblemsValue !== '' && bproblemsValue.length >= bproblemsMin && bproblemsValue.length <= bproblemsMax) {
      setSuccessForBriefing(bproblems);
    } else {
      setErrorForBriefing(bproblems);
    }
    if(btriggersValue !== '' && btriggersValue.length >= btriggersMin && btriggersValue.length <= btriggersMax) {
      setSuccessForBriefing(btriggers);
    } else {
      setErrorForBriefing(btriggers);
    }
    if(binfoballValue !== '' && binfoballValue.length >= binfoballMin && binfoballValue.length <= binfoballMax) {
      setSuccessForBriefing(binfoball);
    } else {
      setErrorForBriefing(binfoball);
    }
    if(bneedsValue !== '' && bneedsValue.length >= bneedsMin && bneedsValue.length <= bneedsMax) {
      setSuccessForBriefing(bneeds);
    } else {
      setErrorForBriefing(bneeds);
    }
    if(bbarriersValue !== '' && bbarriersValue.length >= bbarriersMin && bbarriersValue.length <= bbarriersMax) {
      setSuccessForBriefing(bbarriers);
    } else {
      setErrorForBriefing(bbarriers);
    }
    if(bstriveValue !== '' && bstriveValue.length >= bstriveMin && bstriveValue.length <= bstriveMax) {
      setSuccessForBriefing(bstrive);
    } else {
      setErrorForBriefing(bstrive);
    }
    if(
      bproblemsValue != '' &&
      bproblemsValue.length >= bproblemsMin &&
      bproblemsValue.length <= bproblemsMax &&
      btriggersValue != '' &&
      btriggersValue.length >= btriggersMin &&
      btriggersValue.length <= btriggersMax &&
      binfoballValue != '' &&
      binfoballValue.length >= binfoballMin &&
      binfoballValue.length <= binfoballMax &&
      bneedsValue != '' &&
      bneedsValue.length >= bneedsMin &&
      bneedsValue.length <= bneedsMax &&
      bbarriersValue != '' &&
      bbarriersValue.length >= bbarriersMin &&
      bbarriersValue.length <= bbarriersMax &&
      bstriveValue != '' &&
      bstriveValue.length >= bstriveMin &&
      bstriveValue.length <= bstriveMax
    ){
      bstepfour.classList.remove("error");
      bstepfour.classList.add("success");
    } else {
      bstepfour.classList.remove("success");
      bstepfour.classList.add("error");
    }

    const bdesignValue = bdesign.value.trim();
    const bassociationsValue = bassociations.value.trim();
    const bsegmentValue = bsegment.value.trim();

    if(bdesignValue !== '' && bdesignValue.length >= bdesignMin && bdesignValue.length <= bdesignMax) {
      setSuccessForBriefing(bdesign);
      bstepfive.classList.remove("error");
    } else {
      setErrorForBriefing(bdesign);
      bstepfive.classList.add("error");
    }
    if(bassociationsValue !== '' && bassociationsValue.length >= bassociationsMin && bassociationsValue.length <= bassociationsMax) {
      setSuccessForBriefing(bassociations);
      bstepfive.classList.remove("error");
    } else {
      setErrorForBriefing(bassociations);
      bstepfive.classList.add("error");
    }
    if(bsegmentValue !== '' && bsegmentValue.length >= bsegmentMin && bsegmentValue.length <= bsegmentMax) {
      setSuccessForBriefing(bsegment);
      bstepfive.classList.remove("error");
    } else {
      setErrorForBriefing(bsegment);
      bstepfive.classList.add("error");
    }
    if(
      bdesignValue !== '' &&
      bdesignValue.length >= bdesignMin &&
      bdesignValue.length <= bdesignMax &&
      bassociationsValue !== '' &&
      bassociationsValue.length >= bassociationsMin &&
      bassociationsValue.length <= bassociationsMax &&
      bsegmentValue !== '' &&
      bsegmentValue.length >= bsegmentMin &&
      bsegmentValue.length <= bsegmentMax
    ) {
      setSuccessForBriefing(bsegment);
      bstepfive.classList.remove("error");
    } else {
      setErrorForBriefing(bsegment);
      bstepfive.classList.add("error");
    }

    if(
      !isEmail(bemailValue)
    ) {
      scroll.scrollTo(totop);
    } else if (
      busernameValue !== '' &&
      busernameValue.length >= busernameMin &&
      busernameValue.length <= busernameMax &&
      bphoneValue !== '' &&
      bphoneValue.length >= bphoneMin &&
      bphoneValue.length <= bphoneMax &&
      bemailValue !== '' &&
      bemailValue.length >= bemailMin &&
      bemailValue.length <= bemailMax &&

      bbasictermsValue !== '' &&
      bbasictermsValue.length >= bbasictermsMin &&
      bbasictermsValue.length <= bbasictermsMax &&
      btargetValue !== '' &&
      btargetValue.length >= btargetMin &&
      btargetValue.length <= btargetMax &&
      bknowValue !== '' &&
      bknowValue.length >= bknowMin &&
      bknowValue.length <= bknowMax &&
      baudienceValue !== '' &&
      baudienceValue.length >= baudienceMin &&
      baudienceValue.length <= baudienceMax &&
      bchoiceValue !== '' &&
      bchoiceValue.length >= bchoiceMin &&
      bchoiceValue.length <= bchoiceMax &&

      blinkValue !== '' &&
      blinkValue.length >= blinkMin &&
      blinkValue.length <= blinkMax &&
      btopicsValue !== '' &&
      btopicsValue.length >= btopicsMin &&
      btopicsValue.length <= btopicsMax &&
      bnotopicsValue !== '' &&
      bnotopicsValue.length >= bnotopicsMin &&
      bnotopicsValue.length <= bnotopicsMax &&
      bpriceValue !== '' &&
      bpriceValue.length >= bpriceMin &&
      bpriceValue.length <= bpriceMax &&
      bimpressionValue !== '' &&
      bimpressionValue.length >= bimpressionMin &&
      bimpressionValue.length <= bimpressionMax &&
      bimportantValue !== '' &&
      bimportantValue.length >= bimportantMin &&
      bimportantValue.length <= bimportantMax &&
      blikeValue !== '' &&
      blikeValue.length >= blikeMin &&
      blikeValue.length <= blikeMax &&
      
      bproblemsValue !== '' &&
      bproblemsValue.length >= bproblemsMin &&
      bproblemsValue.length <= bproblemsMax &&
      btriggersValue !== '' &&
      btriggersValue.length >= btriggersMin &&
      btriggersValue.length <= btriggersMax &&
      binfoballValue !== '' &&
      binfoballValue.length >= binfoballMin &&
      binfoballValue.length <= binfoballMax &&
      bneedsValue !== '' &&
      bneedsValue.length >= bneedsMin &&
      bneedsValue.length <= bneedsMax &&
      bbarriersValue !== '' &&
      bbarriersValue.length >= bbarriersMin &&
      bbarriersValue.length <= bbarriersMax &&
      bstriveValue !== '' &&
      bstriveValue.length >= bstriveMin &&
      bstriveValue.length <= bstriveMax &&

      bdesignValue !== '' &&
      bdesignValue.length >= bdesignMin &&
      bdesignValue.length <= bdesignMax &&
      bassociationsValue !== '' &&
      bassociationsValue.length >= bassociationsMin &&
      bassociationsValue.length <= bassociationsMax &&
      bsegmentValue !== '' &&
      bsegmentValue.length >= bsegmentMin &&
      bsegmentValue.length <= bsegmentMax
    ) {
      fetch('/api/v1/briefing/', {
        method: 'POST',
        body: JSON.stringify({
          fio: busernameValue,
          phone: bphoneValue,
          email: bemailValue,
          product: bctype.value,
          budget: bcsum.value,

          project_descr: bbasictermsValue,
          purpose: btargetValue,
          main_info: bknowValue,
          target_audience: baudienceValue,
          advantages: bchoiceValue,

          url_competitors: blinkValue,
          url_same_like: btopicsValue,
          url_same_dislike: bnotopicsValue,
          price: bpriceValue,
          repulsive_impression: bimpressionValue,
          сriteria: bimportantValue,
          target: blikeValue,

          problems: bproblemsValue,
          triggers: btriggersValue,
          info_pain: binfoballValue,
          needs: bneedsValue,
          barriers: bbarriersValue,
          look_for: bstriveValue,
          
          design: bdesignValue,
          associations: bassociationsValue,
          main_segment: bsegmentValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      briefingform.forEach(n => n.classList.remove('active'));
      briefingsteps.forEach(n => n.classList.remove('active'));
      briefingstep.forEach(n => n.classList.remove('border'));
      briefingform.forEach(n => n.style.maxHeight = null);
      bstepsend.classList.add("active");
      bformend.classList.add("active");
      briefingstep.forEach(n => n.classList.remove('unlock'));
      document.querySelector('.briefing__head').innerText = 'СПАСИБО ЗА БРИФИНГ!';
      document.querySelector('.briefing__desc').innerText = 'Мы свяжемся с вами по указанным в брифинге контактам в самое ближайшее время, чтобы обсудить проект.';
      bstepfive.classList.add("success");
      briefinghome.classList.add("active");
    }
  }
  // END validate briefing__form_five
}