const _ = require("lodash");

module.exports = {
  Speakers: async (session, args, { dataSources }, info) => {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return returns;
    } catch (error) {
      return new ApolloError("Unable to retrieve speakers", "SPEAKERAPIERROR", {
        token: "uniquetoken",
      });
    }
  },
};
