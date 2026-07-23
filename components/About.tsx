export default function About(){

    return(
    
    <section
    id="about"
    className="flex items-center"
    >
    
    <div className="container grid md:grid-cols-2 gap-20">
    
    <img
    src="/profile.png"
    className="rounded-full w-80 mx-auto"
    />
    
    <div>
    
    <h2 className="text-5xl font-bold mb-8">
    About Me
    </h2>
    
    <p className="text-gray-300 leading-8">
    Passionate software engineer building
    modern web applications with React,
    Next.js, Node.js and cloud technologies.
    I enjoy crafting immersive digital
    experiences inspired by cinematic
    animations and minimalist design.
    </p>
    
    </div>
    
    </div>
    
    </section>
    
    )
    }