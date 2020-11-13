const array = [
	{
		Ticker:"AAPL",
		price:"258.08",
		last_Update:"few seconds ago"
	},
	{
		Ticker:"Google",
		price:"125",
		last_Update:"10pm"
	},
	{
		Ticker:"MSFT",
		price:"15",
		last_Update:"5am"
	},
	{
		Ticker:"FB",
		price:"546",
		last_Update:"9pm"
	}
]

const tableBody = document.querySelector('.tableBody')


let data = array.map((item) => {

	if(item.price > 250 ){

		return ` <tbody>
			    <tr>
			      <td>${item.Ticker}</td>
			      <td class="text-success">${item.price}</td>
			      <td>${item.last_Update}</td>
			    </tr>
			  </tbody>`
	} else if(item.price < 250 ){
		return ` <tbody>
			    <tr>
			      <td>${item.Ticker}</td>
			      <td class="text-danger">${item.price}</td>
			      <td>${item.last_Update}</td>
			    </tr>
			  </tbody>`
	}
	else {
		return ` <tbody>
			    <tr>
			      <td>${item.Ticker}</td>
			      <td class="text-white">${item.price}</td>
			      <td>${item.last_Update}</td>
			    </tr>
			  </tbody>`
	}

}).join("")




tableBody.innerHTML = data;
