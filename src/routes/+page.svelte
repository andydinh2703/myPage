<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import runningIcon from '$lib/assets/running.png';
	import cyclingIcon from '$lib/assets/cyclingg.png';
	export let data;

	// Define project data
	const project = 
    {
      title: 'Dough Flow',
      description: 'A machine learning forecasting system for Blue Heron bakery in Penn Yann, NY',
      imageUrl: '', // or empty '' for placeholder
      techStack: ['Python', 'pandas', 'PyCaret', 'Streamlit'],
      projectUrl: 'https://github.com/andydinh2703/DoughFlow',
      date: 'December 2025'
    }

	const meter_to_mile = 0.00062137;

   function mile(meters: number) {
      return (meters * meter_to_mile).toFixed(1);
   }
</script>


<!-- My name section -->
<div class="min-h-screen flex items-center justify-center px-6">
	<div class="max-w-4xl text-center">
		<h1 class="text-6xl lg:text-8xl font-extrabold text-gray-900 mb-6 tracking-tight">
			Andy Dinh
		</h1>

		<div class="w-24 h-[3px] bg-[#D97946] mx-auto my-4"></div>

		<h2 class="text-[20px] text-gray-600 " style="font-family: 'JetBrains Mono', regular;">A Vietnamese kid</h2>
		<h2 class="text-[20px] text-gray-600 " style="font-family: 'JetBrains Mono', regular;">Training for IRONMAN 70.3</h2>
		<h2 class="text-[20px] text-gray-600 " style="font-family: 'JetBrains Mono', regular;">CS + Data Analytics | HWS</h2>

		<!-- Navigations to social platforms -->

		<div class="flex gap-4 justify-center mt-8">
			<a href="https://github.com/andydinh2703" target="_blank" rel="noopener noreferrer" class="px-1 py-1 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 font-medium">Git</a>

			<a href="https://www.linkedin.com/in/andydinh2703/" target="_blank" rel="noopener noreferrer" class="px-2 py-1 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 font-medium">Li</a>

			<a href="https://www.instagram.com/andydinh_/" target="_blank" rel="noopener noreferrer" class="px-2 py-1 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 font-medium">Ig</a>

		</div>


		<h2 class="text-[20px] text-gray-900 lg:text-2xl font-extrabold  mt-20 " style="font-family: 'JetBrains Mono', regular;">GO GET YOURS.</h2>

	</div>

</div>


<!-- Project section -->
<div id="projects" class="py-4 pb-10 lg:py-15 px-6 bg-[#F5F1E8] scroll-mt-20">
	<div class="max-w-6xl mx-auto ">
	  <!-- heading -->
	  <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10">
		PROJECTS
	  </h2>
	  
	  <!-- grid layout -->
	   <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		<ProjectCard 
		title={project.title}
		description={project.description}
		imageUrl={project.imageUrl}
		techStack={project.techStack}
		projectUrl={project.projectUrl}
		date={project.date}
	  />

	   </div>


	</div>
</div>


<!-- Blog section -->
<div id="blog" class="py-4 pb-10 lg:py-15 px-6 bg-white scroll-mt-20">
	<div class="max-w-6xl mx-auto">
		<!-- heading -->
		 <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-5">
			JOURNEY
		 </h2>
		 <div class="flex flex-col items-center mb-5 md:flex-row md:justify-center md:gap-15">
			
			{#if data.stravaStats}
				<div class="flex flex-row">
					<img src={runningIcon} alt="Running icon" class="w-6 h-6 inline-block md:w-8 md:h-8 md:-my-1" />
					<h3 class="text-2xl font-extrabold text-gray-800 md:text-3xl" style="font-family: 'JetBrains Mono', regular;" >{mile(data.stravaStats.all_run_totals.distance)} mi </h3>
				</div>
				
				<div class="flex flex-row">
					<img src={cyclingIcon} alt="Running icon" class="w-8 h-8 inline-block -my-1 md:w-11 md:h-11 md:-my-2" />
					<h3 class="text-2xl md:text-3xl font-extrabold text-gray-800" style="font-family: 'JetBrains Mono', regular;" >{mile(data.stravaStats.all_ride_totals.distance)} mi </h3>
				</div>
				
			{:else }
			<p>Could not load Strava stats...</p>

			{/if}
		 </div>
		 

		 <!-- grid layout -->
		  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

			{#each data.posts as blog }
				<a href="/blog/{blog.slug}">
					<BlogCard
						title = {blog.title} 
						shortdes = {blog.shortdes}
						imageUrl = {blog.imageUrl}
						date = {blog.date}
						slug = {blog.slug}
						tags = {blog.tags}
					/>
				</a>
			{/each}
		  </div>
	</div>
</div>


