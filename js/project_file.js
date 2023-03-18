function generateNormalDistribution(mean, variance) {
  // 0から1の間の2つの乱数を生成する
  var u1 = Math.random();
  var u2 = Math.random();
  
  // Box-Muller法を使用して正規分布に従う乱数を生成する
  var z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  var z2 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
  
  // 平均と分散を考慮して値を調整する
  var x = mean + Math.sqrt(variance) * z1;
  
  return x;
}

function generateRandomNumber(mean, variance) {
			var randomNumber = generateNormalDistribution(mean, variance); 
			document.getElementById("result").innerHTML = "数値: " + randomNumber;
		}
