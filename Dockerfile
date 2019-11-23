FROM openjdk:8-jdk-alpine
ADD target/OpenLegacyInventoryEx-0.0.1-SNAPSHOT.jar OpenLegacyInventoryEx-0.0.1-SNAPSHOT.jar
EXPOSE 8088
ENTRYPOINT ["java", "-jar", "OpenLegacyInventoryEx-0.0.1-SNAPSHOT.jar"]