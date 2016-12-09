module.exports = {
	jekyllBuild: {
            command: 'jekyll build'
        },
    jekyllServe: {
            command: 'jekyll serve'
	},
	interpolateEnvVariables: {
            command: `sed -i '' 's/PREVIEW_TOKEN/'"$PREVIEW_TOKEN"'/g' _config.yml && sed -i '' 's/CONTENTFUL_ACCESS_TOKEN/'"$CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml && sed -i '' 's/CONTENTFUL_SPACE_ID/'"$CONTENTFUL_SPACE_ID"'/g' _config.yml`
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$PREVIEW_TOKEN"'/PREVIEW_TOKEN/g' _config.yml && sed -i '' 's/'"$CONTENTFUL_ACCESS_TOKEN"'/CONTENTFUL_ACCESS_TOKEN/g' _config.yml && sed -i '' 's/'"$CONTENTFUL_SPACE_ID"'/CONTENTFUL_SPACE_ID/g' _config.yml`
    }
       
}