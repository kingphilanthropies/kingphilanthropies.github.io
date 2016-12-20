module.exports = {
    jekyllBuild: {
            command: 'jekyll build'
        },
    jekyllBuildContentful: {
            command: 'jekyll contentful --rebuild'
    },
	interpolateEnvVariables: {
            command: `sed -i '' 's/PREVIEW_TOKEN/'"$PREVIEW_TOKEN"'/g' _config.yml && sed -i '' 's/CONTENTFUL_ACCESS_TOKEN/'"$CONTENTFUL_ACCESS_TOKEN"'/g' _config.yml && sed -i '' 's/CONTENTFUL_SPACE_ID/'"$CONTENTFUL_SPACE_ID"'/g' _config.yml`
    },
 	removeAPIKeys: {
            command: `sed -i '' 's/'"$PREVIEW_TOKEN"'/PREVIEW_TOKEN/g' _config.yml && sed -i '' 's/'"$CONTENTFUL_ACCESS_TOKEN"'/CONTENTFUL_ACCESS_TOKEN/g' _config.yml && sed -i '' 's/'"$CONTENTFUL_SPACE_ID"'/CONTENTFUL_SPACE_ID/g' _config.yml`
    },
    commentContentful: {
            command: `sed -i '' 's/"jekyll-contentful"/#"jekyll-contentful"/g' _config.yml && sed -i '' 's/gem "jekyll-contentful"/#gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/gem "jekyll-contentful-data-import"/#gem "jekyll-contentful-data-import"/g' Gemfile`
    },
    uncommentContentful: {
            command: `sed -i '' 's/#"jekyll-contentful"/"jekyll-contentful"/g' _config.yml && sed -i '' 's/#gem "jekyll-contentful"/gem "jekyll-contentful"/g' Gemfile && sed -i '' 's/#gem "jekyll-contentful-data-import"/gem "jekyll-contentful-data-import"/g' Gemfile`
    }
       
}