.PHONY: deploy
deploy: book
	@echo "====> deploying to github"
	git worktree add ./tmp gh-pages
	-rm -rf ./tmp/*
	-cp -rp book/* ./tmp
	-cd ./tmp && \
		git add -A && \
		git commit -m "deployed on $(shell date) by ${USER}" && \
		git push -f origin gh-pages
	git worktree remove ./tmp
