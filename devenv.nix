{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  languages = {
    javascript = {
      enable = true;
      pnpm.enable = true;
      pnpm.install.enable = true;
    };

    python = {
      enable = true;
      uv.enable = true;
    };
  };

}
