MemoryStorageService = function () {
	var service = {};
	var projects = [
        { name: 'PHP Integrations Project', company: 'PHPStorm', description: 'Integrate our php application with eBay'},
        { name: 'Java Junior Developer', company: 'Apache', description: 'Java junior developer for web app maintenance'},
        { name: 'JavaScript Virtual DOM Expert', company: 'Google', description: 'JS expert to help us optimize our web app\'s performance' }
    ];

    service.getProjects = function() {
    	return projects.slice(0);
    }

    service.addProject = function(name, company, description, addLocation) {
    	
    	var project = {
    		name: name,
    		company: company,
    		description: description
    	};

        var dfd = new $.Deferred();
        if (addLocation) {
            alert('adding location');
    		navigator.geolocation.getCurrentPosition(
			    function(position) {
                    alert('got location');
			        project.loc = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    projects.push(project);
                    alert('success!');
                    dfd.resolve();
			    },
			    function() {
                    alert('failure');
                    dfd.reject(
                            'We could not fetch your current location. ' + 
                            'Please try again or post a project without adding a location');
			    }
			);
    	}
        return dfd.promise();
    	
    }

	return service;
}