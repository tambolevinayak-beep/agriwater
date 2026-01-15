// ================== CROP DATA ==================
window.CROPS = {
  rice:{ id:'rice', name:'Rice',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz038ws4PTCrJgZF8DrkaDZMystXvPm7CEEw&s',
video: 'https://www.youtube.com/embed/9gmw_1Jhmns',




    desc:'Rice is a high-water crop cultivated in paddy fields.',
    waterLperKg:2500, yieldKgPerHa:5000,
    soil:'Clay/Loam', season:'Kharif (Jun-Oct)',
    seasonSteps:['Sowing: Jun-Jul','Transplant: Jul-Aug','Harvest: Oct-Nov'],
    recos:['Alternate wetting & drying','Use SRI method','Mulching']
  },

  wheat:{ id:'wheat', name:'Wheat',
    img:'https://m.media-amazon.com/images/I/714xCG6CxKL.AC_UF1000,1000_QL80.jpg',
    video: 'https://www.youtube.com/embed/aL-7_vbabtQ',

    desc:'Wheat is grown in rabi season and uses moderate water.',
    waterLperKg:1800, yieldKgPerHa:3500,
    soil:'Alluvial/Loam', season:'Rabi (Nov-Apr)',
    seasonSteps:['Sowing: Oct-Nov','Growth: Dec-Jan','Harvest: Mar-Apr'],
    recos:['Sprinkler irrigation','Drought-tolerant varieties']
  },

  maize:{ id:'maize', name:'Maize',
    img:'https://peptechbio.com/wp-content/uploads/2023/09/wouter-supardi-salari-HE_MjmWh9eQ-unsplash-scaled.jpg',
        video: 'https://www.youtube.com/embed/xG84FgRBsgk',
    desc:'Maize is comparatively water-efficient.',
    waterLperKg:1200, yieldKgPerHa:4500,
    soil:'Loam', season:'Kharif/Rabi',
    seasonSteps:['Sowing: Jun-Jul','Harvest: Sep-Oct'],
    recos:['Proper spacing','Mulching']
  },

  oats:{ id:'oats', name:'Oats',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIt3dm9yyFDITVBC_ZYKMV4zzDQY9H8MNUeQ&s',
        video: 'https://www.youtube.com/embed/Mi4FDIDYMzQ',
    desc:'Nutritious crop with low water need.',
    waterLperKg:1000, yieldKgPerHa:3000,
    soil:'Loam', season:'Rabi',
    seasonSteps:['Sowing: Nov','Harvest: Mar'],
    recos:['Light irrigation']
  },

  cotton:{ id:'cotton', name:'Cotton',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNBTJOOmjX_eIixTexo9tlVMSoURjdgRKwA&s',
        video: 'https://www.youtube.com/embed/eN-TqqBQOAk',
    desc:'Cotton needs water during flowering.',
    waterLperKg:2200, yieldKgPerHa:1500,
    soil:'Black soil', season:'Kharif',
    seasonSteps:['Sowing: Jun','Harvest: Nov'],
    recos:['Drip irrigation']
  },

  soybean:{ id:'soybean', name:'Soybean',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIryCHcCtTffwMFn3Xi5UpU2tF7qzRK9nLuw&s',
        video: 'https://www.youtube.com/embed/8A_jPbjuyeM',
    desc:'Oilseed crop with moderate water.',
    waterLperKg:1700, yieldKgPerHa:2000,
    soil:'Loam', season:'Kharif',
    seasonSteps:['Sowing: Jun','Harvest: Sep'],
    recos:['Timely sowing']
  },

  bajra:{ id:'bajra', name:'Bajra',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHXDLZsuPiWhP7oUpOW7migYvom3LMkFNqw&s',
        video: 'https://www.youtube.com/embed/0C25VazpL7s',
    desc:'Drought-resistant crop.',
    waterLperKg:600, yieldKgPerHa:2200,
    soil:'Sandy', season:'Kharif',
    seasonSteps:['Sowing: Jun','Harvest: Sep'],
    recos:['Ideal for dry regions']
  },

  jowar:{ id:'jowar', name:'Jowar',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPgy4QVn_d0kM1cUfyq_WXQdcHQXYFoQvyw&s',
        video: 'https://www.youtube.com/embed/-5GBfv0t_bY',
    desc:'Hardy low-water crop.',
    waterLperKg:900, yieldKgPerHa:2500,
    soil:'Loam', season:'Kharif/Rabi',
    seasonSteps:['Sowing: Jun','Harvest: Oct'],
    recos:['Conserves soil moisture']
  },

  groundnut:{ id:'groundnut', name:'Groundnut',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_U1xlfLeQHGjrDy7oQB25HXSmzsyvhc3sxA&s',
        video: 'https://www.youtube.com/embed/JW4XouW8ec0',
    desc:'Oilseed crop with moderate water.',
    waterLperKg:1500, yieldKgPerHa:1800,
    soil:'Sandy loam', season:'Kharif',
    seasonSteps:['Sowing: Jun','Harvest: Oct'],
    recos:['Avoid waterlogging']
  }
};

// ================== NAV ==================
function openCrop(id){
  location.href = `crop.html?crop=${id}`;
}

// ================== LOAD CROP PAGE ==================
function loadCropPage(){
  const cropId = new URLSearchParams(location.search).get('crop') || 'rice';
  const crop = CROPS[cropId];
  if(!crop) return;

  cropTitle.textContent = crop.name;
  cropImg.src = crop.img;
  cropDesc.textContent = crop.desc;
  waterVal.textContent = crop.waterLperKg + ' L/kg';
  yieldVal.textContent = crop.yieldKgPerHa + ' kg/acre';
  soilVal.textContent = crop.soil;
  seasonVal.textContent = crop.season;

  seasonList.innerHTML = crop.seasonSteps.map(s=>`<li>${s}</li>`).join('');
  recoList.innerHTML = crop.recos.map(r=>`<li>${r}</li>`).join('');

  // cropVideo.src = crop.video;
  document.getElementById("cropVideo").src = crop.video;
 // placeholder video image

  // chart
  const labels = Object.values(CROPS).map(c=>c.name);
  const values = Object.values(CROPS).map(c=>c.waterLperKg * c.yieldKgPerHa);

  const ctx = compChart.getContext('2d');
  new Chart(ctx,{
    type:'bar',
    data:{ labels,
      datasets:[{ data:values, backgroundColor:'#2e7d32' }]
    },
    options:{ plugins:{legend:{display:false}} }
  });
}

// ================== CALCULATION ==================
function calcForCrop(){
  const cropId = new URLSearchParams(location.search).get('crop') || 'rice';
  const crop = CROPS[cropId];
  const acres = Number(areaInput.value);
  if(!acres || acres<=0) return alert('Enter valid area');

  const totalYield = crop.yieldKgPerHa * acres;
  const totalWater = totalYield * crop.waterLperKg;

  calcText.innerHTML =
    `<b>Yield:</b> ${totalYield.toLocaleString()} kg<br>
     <b>Water:</b> ${totalWater.toLocaleString()} litres`;

  calcResult.classList.remove('hide');
}



function saveCalcFromCalc(){
  if(!window._lastCalc){
    alert("Please calculate first");
    return;
  }

  const records = JSON.parse(localStorage.getItem("awt_records") || "[]");

  records.unshift(window._lastCalc); // add new record at top

  localStorage.setItem("awt_records", JSON.stringify(records));

  alert("Calculation saved successfully!");
}


// ================== INIT ==================
document.addEventListener('DOMContentLoaded',()=>{
  if(location.pathname.endsWith('crop.html')) loadCropPage();
});
