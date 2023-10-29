<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>

export function Login() {
  return (

    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-xl shadow-md w-96">
        <div className="text-center mb-6">
          <img src={'/hybrid plataform/src/assets/logo.png'} alt="Hybrid" className="h-18 mx-auto mb-4" />
          <h1 className="text-white text-xl font-semibold">Plataforma de Dados</h1>
          <p className="text-white">faça login e comece a usar!</p>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="adriano@example.com"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Sua senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-200"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-white">
              Lembrar de mim por 30 dias
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
          >
            Entrar na plataforma
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm">
            <a href="#" className="text-white hover:underline">
              Esqueceu sua senha?
            </a>
          </p>
          <p className="text-sm text-white">
            Não possui conta?{' '}
            <a href="#" className="text-white hover:underline">
              Crie uma agora!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
