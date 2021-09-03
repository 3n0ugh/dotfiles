module.exports = {
  brewtap: ['blacknon/lssh', 'derailed/k9s', 'mongodb/brew'],
  brew: [
    'bat', // alternative to `cat`: https://github.com/sharkdp/bat +
    'coreutils', // upgrade grep so we can get things like inverted match (-v) +
    'grep --with-default-names', // alternative ripgrep +
    'vim --with-client-server --with-override-system-vi', // vim ide +
    'lsd', //https://github.com/Peltoche/lsd -- colorize +
    'autojump', //https://github.com/wting/autojump +
    'sourcetree', // git gui +
    'adr-tools', //https://github.com/npryce/adr-tools --- Architecture Decision +
    // 'k9s', //https://github.com/derailed/k9s --- Kubernetes CLI
    // 'kubectx', // switch between clusters and namespaces in kubectl
    'yarn', // package manager
    // 'kind', // tool for running local Kubernetes clusters using Docker container “nodes”
    // 'skaffold', //https://skaffold.dev/docs/ --- Kubernetes Thing
    'asciinema', // Record and share your terminal session +
    // 'minikube', //  quickly sets up a local Kubernetes cluster
    'entr', // Run arbitrary commands when files change +
    'graphviz', // graph visualization software +
    'hub',
    'tree',
    // 'hadolint', //https://github.com/hadolint/hadolint --- docker file linter
    'cowsay', // Configurable talking characters in ASCII art +
    'fortune', // Infamous electronic fortune-cookie generator +
    'gnebbia/kb/kb', // A minimalist knowledge base manager +
    'dust', // Like du but more intuitive. +
    'bit', //https://github.com/chriswalz/bit --- Bit is a modern Git CLI +
    'python@3.9',
    'awscli',
    // 'fish',
    'go',
    'fzf', // Command-line fuzzy finder written in Go
    // 'hugo', // fastest website building framework
    'nmap',
    'shellcheck', // Static analysis and lint tool, for (ba)sh scripts
    // 'st', // simple statistics from the command line
    'wget',
    'libpq', // postgresql
    'mongodb-community@5.0', // mongoDB
  ],
  cask: [
    'evernote',
    'iterm2',
    'visual-studio-code',
    'slack',
    'dotnet',
    'clipy',
    'alfred',
    'discord',
    'gimp',
    'robo-3t',
    'postman',
    'visual-studio',
  ],
  gem: ['mdless'],
  npm: [
    'prettyjson',
    'buzzphrase',
    'vtop',
    'tldr', //https://tldr.sh/
  ],
};
