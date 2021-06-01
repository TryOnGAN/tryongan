function display(src_name, id_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")


	if(src_name == "static_files/resources/target/43bX93WjTb8Z4w2aHVTujo_o4XzSw3Sqkr9hvNGt8tTfb_seed1332.png"){
		output.classList.add("hidden")
		model_image.src = src_name
		model_image.classList.remove("hidden")
		console.log('model image',model_image.src)

	}
	else{
		model_image.classList.add("hidden")
		output.classList.remove("hidden")
	}

	if(src_name == "static_files/resources/target/5spkYqhxaEUq7QXXZdtdGJ_cHbd6QdQkHPFsat9PUcsq6_seed12431.png"){
		output.classList.add("hidden")
		model_image.src = src_name
		model_image.classList.remove("hidden")
		console.log('model image',model_image.src)

	}
	else{
		model_image.classList.add("hidden")
		output.classList.remove("hidden")
	}

	if(model_image.src === "http://localhost:8000/static_files/resources/target/43bX93WjTb8Z4w2aHVTujo_o4XzSw3Sqkr9hvNGt8tTfb_seed1332.png"){
		output.src = src_name
		console.log('src',output.src)
	}
	else{
		output.src = id_name
		console.log('id',output.src)
	}

}

function hover(id_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")
	if(id_name == "interpolatedResult"){
		output.classList.remove("hidden")
		model_image.classList.add("hidden")
	}
	else{
		model_image.classList.remove("hidden")
		output.classList.add("hidden")
	}
}

function noHover(id_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")
	if(id_name == "interpolatedResult"){
		output.classList.add("hidden")
		model_image.classList.remove("hidden")
	}
	else{
		model_image.classList.add("hidden")
		output.classList.remove("hidden")
	}
}