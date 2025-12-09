<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	// Define your projects data
	const project = 
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with SvelteKit',
      imageUrl: '/images/portfolio.jpg', // or empty '' for placeholder
      techStack: ['SvelteKit', 'Tailwind', 'TypeScript'],
      projectUrl: 'https://github.com/yourusername/project',
      date: 'December 2024'
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
<div id="projects" class="py-4 lg:py-15 px-6 bg-[#F5F1E8]">
	<div class="max-w-6xl mx-auto">
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



