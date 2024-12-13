up:
	@echo "Installing dependencies"
	pnpm install
	@echo "Starting playground..."
	cd playground && pnpm install && pnpm dev

commit:
	pnpm build
	pnpm lint
	@echo "Enter commit message: "
	@read commit_msg && \
	git commit -m "$$commit_msg"

publish:
	pnpm changeset -v
	git add .
	@echo "Enter commit message: "
	@read commit_msg && \
	git commit -m "$$commit_msg"
	git push
	pnpm postversion
	pnpm release
	@echo "Successfully publish to npm registry"