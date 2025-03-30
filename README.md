<p align="center"><img src="./assets/logo.png" width="400" align="center" /></p>
<p align="center">A enchanced, lightweight and fast utility-first CSS</p>

> [!NOTE]
> This project is under development and is being carried out independently.

## Usage
```shell
$ npm install salutecss
$ salute build
```

## Benchmarking
| Library | Compile Time (Ms) |
| ------- | ------- |
| SaluteCSS | ~ 7ms |
| TailwindCSS | ~ 50ms |

## Salute CLI
```shell
Usage:
  salute [command] [options]

Commands:
  build     Compile styles once
  help      Shows the Help

Options:
  --input    Input file/directory path  (required)
  --output   Output file path           (default: salute.css)

Examples:
  $ salute build --input src/index.html
  $ salute build --input src/**/*.js --output public/styles.css
  $ salute build
```

## Examples
- Next.js ([Click Here](./examples/next.js))
- Pure HTML ([Click Here](./examples/pure_html))

## Using
- Modern-Normalize ([Click Here](https://github.com/sindresorhus/modern-normalize))

## Todo
- Create a native glob method
- Documentation (Under Development - Coming Soon)

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
