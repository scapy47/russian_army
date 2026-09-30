cd ./frontend/ && pnpm run build && cd - ;
cd ./backend/ && uv run uvicorn main:app && cd - ;
