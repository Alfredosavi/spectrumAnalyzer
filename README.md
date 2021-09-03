# spectrumAnalyzer
O programa usa o objeto p5.FFT para analisar as frequências (matriz de espectro) de um arquivo de som (música). Foi criado um "equalizador gráfico" para a visualização.


FFT (Fast Fourier Transform) é um algoritmo de análise que isola frequências de áudio individuais dentro de uma forma de onda.
Uma vez instanciado, um objeto p5.FFT pode retornar uma matriz com base em dois tipos de análises:
  * FFT.analyze(): Calcula os valores de amplitude ao longo do domínio da frequência. Os índices de matriz correspondem às frequências (ou seja, tons), do mais baixo ao mais alto que os humanos podem ouvir. Cada valor representa a amplitude naquela fatia do espectro de frequência. Use com getEnergy()para medir a amplitude em frequências específicas ou dentro de uma faixa de frequências.
  * FFT.waveform(): Calcula os valores de amplitude ao longo do domínio do tempo. Os índices de matriz correspondem a amostras em um breve momento no tempo. Cada valor representa a amplitude da forma de onda naquela amostra de tempo.

FFT analisa um instantâneo muito curto de som chamado buffer de amostra. Ele retorna uma série de medições de amplitude, conhecidas como bins. A matriz tem 1024 bins por padrão. Você pode alterar o comprimento da matriz bin, mas deve ser uma potência de 2 entre 16 e 1024 para que o algoritmo FFT funcione corretamente. O tamanho real do buffer FFT é duas vezes o número de bins, portanto, dada uma taxa de amostragem padrão, o buffer tem 2048/44100 segundos de duração.

![](https://i.imgur.com/hZtjL25.png)


## 🔥 Instalação e execução
  1. Copie o [link](https://github.com/Alfredosavi/spectrumAnalyzer.git) desse repositório para fazer o clone;
  2. Abra o arquivo index.html dentro da pasta src;
  3. Clique no botão Play/Stop.
    

## :warning: Observações
  * Para alterar a música coloque o Path da música na função loadSound() do arquivo sketch.js.
  
OBS: Extensões suportadas: .mp3 e .ogg.

## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :credit_card: Créditos

* p5.JS [Reference](https://p5js.org/reference/#/p5.FFT)


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
