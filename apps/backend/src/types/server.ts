export interface EnvConfig {
  server: {
    port: number;
    host: string;
  };

  ollama: {
    model: string;
    baseUrl: string;
  };
}
