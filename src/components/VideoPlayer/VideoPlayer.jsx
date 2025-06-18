const VideoPlayer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Demo de Accesibilidad</h2>
      
      <video
        controls
        autoPlay
        className="w-full max-w-3xl rounded-lg shadow-lg"
        aria-label="Video demostrativo de accesibilidad con lector de pantalla"
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-bedf9.firebasestorage.app/o/projects_assets%2Fa11-pruebareactBMR.mov?alt=media&token=30e390f3-ed43-4c76-83de-d3d0af3e61ef"
          type="video/mp4"
        />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  );
};

export default VideoPlayer;
