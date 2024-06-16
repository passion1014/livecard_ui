import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development', // 또는 'production'
  entry: './src/index.ts', // 엔트리 포인트 파일
  
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들링된 파일이 생성될 디렉토리
    filename: 'bundle.js', // 번들링된 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일 확장자
        use: 'ts-loader', // TypeScript 컴파일러
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  
};

export default config;