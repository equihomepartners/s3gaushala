import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Heading,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'

const GauSevaModal = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('orange.500', 'orange.300')

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bg={bgColor}>
        <ModalHeader>
          <Heading size="lg" color={headingColor}>
            Why Gauseva?
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            For a Non-Profit Gaushala — Cultural Perspective
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <List spacing={4}>
            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                1. Cultural and Spiritual Significance
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    In Indian culture, the cow (Gau Mata) is revered as a symbol of motherhood, compassion, and selfless giving.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Ancient scriptures like the Vedas, Puranas, and Mahabharata highlight the importance of cows for maintaining Dharma (righteousness) and Srishti (creation).
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Serving and protecting cows is believed to invite divine blessings (Punya) and purify the soul.
                  </Text>
                </ListItem>
              </List>
            </ListItem>

            <Divider />

            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                2. Preservation of Heritage
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Indigenous cow breeds like Gir, Sahiwal, and Tharparkar are not just animals — they are a living part of India's agricultural, spiritual, and medicinal heritage.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    By running a Gaushala, the organization preserves and protects ancient breeds that are naturally adapted to the Indian ecosystem.
                  </Text>
                </ListItem>
              </List>
            </ListItem>

            <Divider />

            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                3. Compassion and Non-Violence (Ahimsa)
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Gauseva embodies the spirit of Ahimsa — non-violence towards all living beings.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Providing shelter, food, and care to abandoned, old, or injured cows aligns with the deepest values of kindness and service to life.
                  </Text>
                </ListItem>
              </List>
            </ListItem>

            <Divider />

            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                4. Environmental and Agricultural Impact
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Cow dung and urine have been used for thousands of years in organic farming, making soil fertile without chemicals.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    A Gaushala can be a hub for promoting sustainable, Gau-Adharit Krishi (cow-based natural farming), which is healthier for people and the planet.
                  </Text>
                </ListItem>
              </List>
            </ListItem>

            <Divider />

            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                5. Social Responsibility and Community Building
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    Gauseva brings communities together through volunteerism, education, and spiritual gatherings.
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    It sets an example for compassion-driven living, inspires youth to reconnect with cultural roots, and strengthens bonds across generations.
                  </Text>
                </ListItem>
              </List>
            </ListItem>

            <Divider />

            <ListItem>
              <Heading size="md" color={headingColor} mb={2}>
                6. Symbol of Gratitude
              </Heading>
              <List spacing={2}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} color="orange.400" boxSize={2} />
                  <Text color={textColor}>
                    In a world moving towards rapid industrialization, Gauseva is a conscious act of gratitude — honoring the being who silently supports human life through milk, nourishment, and agriculture.
                  </Text>
                </ListItem>
              </List>
            </ListItem>
          </List>

          <Box mt={8} p={4} bg="orange.50" borderRadius="lg">
            <Heading size="md" color={headingColor} mb={2}>
              Our Mission
            </Heading>
            <Text color={textColor} fontStyle="italic">
              "Through Gauseva, we nurture compassion, protect sacred life, preserve ancient heritage, and sow seeds of sustainability for future generations."
            </Text>
            <Text mt={4} color={textColor} fontWeight="bold">
              गौ सेवा — संस्कृति का संवर्धन, जीवन का संरक्षण
            </Text>
            <Text color={textColor} fontSize="sm">
              (Gauseva — Preserving Culture, Protecting Life)
            </Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GauSevaModal 